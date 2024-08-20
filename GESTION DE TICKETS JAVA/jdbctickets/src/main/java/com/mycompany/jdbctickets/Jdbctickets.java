package com.mycompany.jdbctickets;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Jdbctickets {

    public static void main(String[] args) {
        String usuario = "root";
        String password = "";
        String url = "jdbc:mysql://localhost:3306/jdbctickets";
        Connection conexion;
        Statement statement;
        ResultSet rs;                        
        try {    
            conexion = DriverManager.getConnection(url, usuario, password);
            statement = conexion.createStatement();

            // Consulta de datos
            rs = statement.executeQuery("SELECT * FROM usuario");
            while (rs.next()) {
                System.out.println(rs.getString("nombre"));
            }
            
            // Inserción de datos
            String insertSql = "INSERT INTO `usuario`(`nombre`, `email`, `telefono`, `direccion`, `cargo`, `id_departamento`) " +
                               "VALUES ('Sandra', 'sandra@gmail.com', '3182581540', 'Cali', 'auxiliar', 5)";
            statement.execute(insertSql);
            System.out.println("Datos insertados.");
            
            // Consulta después de la inserción
            rs = statement.executeQuery("SELECT * FROM usuario");
            while (rs.next()) {
                System.out.println(rs.getString("nombre"));
            }
            
            // Actualización de datos
            String updateSql = "UPDATE `usuario` SET `nombre` = 'Claudia' WHERE `id` = 7";
            statement.execute(updateSql);
            System.out.println("Datos actualizados.");
            
            // Consulta después de la actualización
            rs = statement.executeQuery("SELECT * FROM usuario");
            while (rs.next()) {
                System.out.println(rs.getString("nombre"));
            }
            
            // Eliminación de datos
            String deleteSql = "DELETE FROM `usuario` WHERE `id` = 6";
            statement.execute(deleteSql);
            System.out.println("Datos eliminados.");
            
            // Consulta después de la eliminación
            rs = statement.executeQuery("SELECT * FROM usuario");
            while (rs.next()) {
                System.out.println(rs.getString("nombre"));
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(Jdbctickets.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
