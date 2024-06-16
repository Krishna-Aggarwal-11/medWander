import  {Sequelize,DataTypes } from 'sequelize';
const sequelize = new Sequelize('medWander', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

const Form = sequelize.define('Form', {
  formType: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  countryCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

sequelize.sync();

export { Form , sequelize};
