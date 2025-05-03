const bcrypt = require('bcrypt');
const {Schema,model} = require('mongoose');

const userSchema = new Schema({ 
    name:{
        type:Schema.Types.String,
        required:true,
        trim:true
    },
    username:{
        type:Schema.Types.String,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:Schema.Types.String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:Schema.Types.String,
        required:true,
        trim:true,
        unique:true
    },
    role:{
        type:Schmea.Types.String,
        enum:['mentor','student'],
        default:null
    }
})


userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.passowrd = await bcrypt.hash(this.password,8);
    }
    next();
});

userSchema.index({email:1});

const UserModel = model('User',userSchema);

module.exports = UserModel;