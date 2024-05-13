const mysql = require("mysql");
const conn = require("../configs/database.config")
class database {
	executeQuery = async (sql, values) => {
		return await new Promise((resolve, reject) => {
			try {
				conn.query(sql, values, (error, result) => {
					if (error) {
						reject(error.sqlMessage);
					}
					else
						resolve(result);
				});
			}
			catch (error) {
				throw error;
			}
		})
	}

	/*
	insert a data in database then use,
	tablename: tablename 
	data: Object{fieldname : value, ......}
	*/
	insertData = async (tablename, data) => {
		let values = [];
		let sql = `insert into ${tablename}(`;
		Object.keys(data).forEach(key => {
			sql += `${key},`;
		})
		sql = sql.slice(0, sql.length - 1) + ") values (";
		Object.keys(data).forEach(key => {
			sql += `?,`;
			values.push(data[key]);
		})
		sql = sql.slice(0, sql.length - 1) + ");";
		try {
			return await this.executeQuery(sql, values);
		}
		catch (error) {
			throw error;
		}
	}

	/*
	if data is updated in database at that time used
	table name,
	newdata = {
		field name : value,
		.....
	}
	consditions = {
		field name : value
	}
	condition is connect must be and operator
	*/
	updateData = async (tablename, newdata, conditions) => {
		let values = [];
		let sql = `update ${tablename} set `;

		Object.keys(newdata).forEach(key => {
			sql += `${key} = ?, `
			values.push(newdata[key]);
		})
		sql = sql.slice(0, sql.length - 2) + " where ";

		Object.keys(conditions).forEach(key => {
			sql += `${key} = ? and `;
			values.push(conditions[key]);
		})

		sql = sql.slice(0, sql.length - 5) + ";";
		try {
			return await this.executeQuery(sql, values)
		}
		catch (error) {
			throw error;
		}
	}

	/*
	if you can delete data at that time used
	table name cand 
	conditions{field name: value}
	*/
	deleteData = async (tablename, conditions) => {
		let values = [];
		let sql = `delete from ${tablename} where `;
		Object.keys(conditions).forEach(key => {
			sql += `${key} = ? and `;
			values.push(conditions[key]);
		})

		sql = sql.slice(0, sql.length - 5) + ";";
		try {
			return await this.executeQuery(sql, values)
		}
		catch (error) {
			throw error;
		}
	}
}

module.exports = database;