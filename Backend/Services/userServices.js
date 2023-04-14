const dbCon = require("../config/dbConfig");

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const checkPassword = (data, req, res) => {
    if (data.length > 0) {
      if (data[0].password == password) {
        res.json({
          staus: 200,
          message: "Login Success",
        });
      } else {
        res.json({
          staus: 400,
          message: "passward not matched",
        });
      }
    }
  };

  const sqlQuery = `select * from user_login where email='${email}'`;
  const sqlQuery1 = `select * from user_login where username='${email}'`;

  await dbCon.query(sqlQuery, async (error, data) => {
    try {
      if (data.length == 0) {
        await dbCon.query(sqlQuery1, async (error, data1) => {
          if (data1 == 0) {
            res.json({
              status: 400,
              message: "user not exist",
            });
          } else {
            checkPassword(data1, req.body, res);
          }
        });
      }
      if (data.length > 0) {
        checkPassword(data, req.body, res);
      }
    } catch (error) {
      res.json({
        message: error,
      });
    }
  });
};
module.exports = { userLogin };
