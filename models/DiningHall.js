export default (sequelize, DataTypes) => {
  const DiningHall = sequelize.define(
    'DiningHall',
    {
      hall_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      hall_name: {
        type: DataTypes.STRING,
      },
      hall_address: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return DiningHall;
};
