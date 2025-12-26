package com.ATM.DAO;

import com.ATM.dbCconnection.Db_Connection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class LoginDAO {
    public boolean validLoginCart(int cartNo , int pin){
        String sql = "Select 1 from account where cartNo = ? and pin = ?";
        String accountName = null;
        try (Connection conn = Db_Connection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)){
            ps.setInt(1,cartNo);
            ps.setInt(2,pin);

            ResultSet rs = ps.executeQuery();
            return rs.next();
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
