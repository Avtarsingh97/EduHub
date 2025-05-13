import React, { useEffect, useState } from "react";
import Dashboard from "./dashboard";
import ServiceCard from "../../components/serviceCard";
import service from "../../apiManager/service";
import { Button, Input, Modal, Form, Spin, Select } from "antd";
import toast from "react-hot-toast";
import { FiPlus } from "react-icons/fi";
import useUserStore from "../../store/user";

const Services = () => {
  const [services, setServices] = useState([]); // State to hold services
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
  const [editingService, setEditingService] = useState(null); // State to track which service is being edited
  const [loading, setLoading] = useState(true); // State to track loading status
  const { setUser, user: mentorData } = useUserStore(); // To fecth mentor id from userState

  const { Option } = Select;
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const mentorId = mentorData._id;
        if (!mentorId) {
          toast.error("Mentor ID is missing. Please login again.");
          return;
        }
        const response = await service.getServicesByMentor(mentorId);
        setServices(response?.data?.service || []);
      } catch (error) {
        console.error("Error fetching mentor services:", error);
        toast.error("Failed to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    if (isModalVisible) {
      if (editingService) {
        form.setFieldsValue({ ...editingService, active: String(editingService.active) });
      } else {
        form.resetFields();
      }
    }
  }, [editingService, form, isModalVisible]);

  // Handle creating a new service
  const handleCreateService = async (values) => {
    setLoading(true);
    setEditingService(null);

    try {
      const response = await service.createService(values);
      setServices((prevServices) => [...prevServices, response?.data?.service]);
      setIsModalVisible(false);
      toast.success("Service created successfully!");
    } catch (error) {
      console.error("Error creating service:", error);
      toast.error("Failed to create service. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle editing an existing service
  const handleEditService = async (values) => {
    setLoading(true);
    const serviceId = editingService?._id;
  
    try {
      const response = await service.editService(serviceId, values);
      console.log(response);
      
      setServices((prevServices) =>
        prevServices.map((service) =>
          service._id === serviceId ? response?.data?.service : service
        )
      );
  
      setIsModalVisible(false);
      toast.success("Service updated successfully!");
    } catch (error) {
      console.error("Error editing service:", error);
      toast.error("Failed to update service. Please try again.");
    } finally {
      setEditingService(null); // Move this here after update
      setLoading(false);
    }
  };
  

  // Handle opening the modal for editing a service
  const handleEdit = (service) => {
    setEditingService(service);
    setIsModalVisible(true);
  };

  const onServiceStatus = (value) => {
    switch (value) {
      case "true":
        form.setFieldsValue({ note: "Service Active.." });
        break;
      case "false":
        form.setFieldsValue({ note: "Service Disabled" });
        break;
      default:
    }
  };
  return (
    <Dashboard>
      <div className='p-6'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-semibold'>Your Services</h2>
          <Button
            type='primary'
            onClick={() => setIsModalVisible(true)}
          >
            <FiPlus className='inline-block mr-2' /> Add New
          </Button>
        </div>

        {/* Modal for creating or editing services */}
        <Modal
          title={editingService ? "Edit Service" : "Create New Service"}
          open={isModalVisible}
          onCancel={() => {
            form.resetFields();
            setEditingService(null);
            setIsModalVisible(false);
          }}
          footer={null}
        >
          <Form
            form={form}
            onFinish={editingService ? handleEditService : handleCreateService}
          >
            <Form.Item
              label='Service Name'
              name='serviceName'
              rules={[{ required: true, message: "Please enter the service name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Description'
              name='description'
              rules={[{ required: true, message: "Please enter the service description!" }]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              label='Duration (mins)'
              name='duration'
              rules={[{ required: true, message: "Please enter the service duration!" }]}
            >
              <Input type='number' />
            </Form.Item>
            <Form.Item
              label='Price (INR)'
              name='price'
              rules={[{ required: true, message: "Please enter the service price!" }]}
            >
              <Input type='number' />
            </Form.Item>
            <Form.Item
              name='active'
              label='Status'
            >
              <Select
                placeholder='Select service status (Active/Disabled)'
                onChange={onServiceStatus}
              >
                <Option value='true'>Active</Option>
                <Option value='false'>Disable</Option>
              </Select>
            </Form.Item>

            <Button
              type='primary'
              htmlType='submit'
            >
              {editingService ? "Save Changes" : "Create Service"}
            </Button>
          </Form>
        </Modal>

        {/* Spinner to show loading status */}
        <Spin spinning={loading}>
          <div className='grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3'>
            {/* Display the list of services */}
            {services?.map((service) => (
              <ServiceCard
                key={service._id}
                service={service}
                onEdit={() => handleEdit(service)}
              />
            ))}
          </div>
        </Spin>
      </div>
    </Dashboard>
  );
};

export default Services;
