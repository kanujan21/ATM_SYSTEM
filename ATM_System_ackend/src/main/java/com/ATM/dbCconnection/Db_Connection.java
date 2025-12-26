package com.ATM.dbCconnection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Db_Connection {
    public static final String URL = "jdbc:mysql://127.0.0.1:3306/atm";
    public static final String USER = "root";
    public static final String PASS = "user";

    public static Connection getConnection() throws SQLException{
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            return DriverManager.getConnection(URL,USER,PASS);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
}
