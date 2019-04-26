package com.mocavada.config.db;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;


@Configuration
@PropertySource("classpath:application.properties")
public class MainSchemaManagement {
    static {
        System.setProperty("org.apache.commons.logging.Log", "org.apache.commons.logging.impl.NoOpLog");
    }

    public static void main(String args[]) {

        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(DBBeansConfig.class);
        DBBeansConfig DBBeansConfig = context.getBean(DBBeansConfig.class);

        // get schema name from connection statement
        int indexEnd = DBBeansConfig.CONNECTION_STATEMENT.contains("?") ?
                DBBeansConfig.CONNECTION_STATEMENT.lastIndexOf('?') : DBBeansConfig.CONNECTION_STATEMENT.length() - 1;

        DBBeansConfig.SCHEMA = DBBeansConfig.CONNECTION_STATEMENT.substring(DBBeansConfig.CONNECTION_STATEMENT.lastIndexOf('/') + 1, indexEnd);


        System.out.println("========");
        if (args.length > 0) {
            switch (args[0]) {
                case "create":
                    jdbc_createSchema(DBBeansConfig.CONFIG_URL, DBBeansConfig.USERNAME, DBBeansConfig.PWD, DBBeansConfig.SCHEMA);
                    break;
                case "drop":
                    jdbc_dropSchema(DBBeansConfig.CONFIG_URL, DBBeansConfig.USERNAME, DBBeansConfig.PWD, DBBeansConfig.SCHEMA);
                    break;
                case "createAdmin":
                    jdbc_createAdmin(DBBeansConfig.CONFIG_URL, DBBeansConfig.USERNAME, DBBeansConfig.PWD, DBBeansConfig.NEW_USER, DBBeansConfig.NEW_PASSWORD);
                    break;
            }
        }

    }

    public static void jdbc_createSchema(String CONN_STRING_CREATE_SCHEMA, String USERNAME, String PWD, String schemaName) {
        try (Connection conn = DriverManager.getConnection(CONN_STRING_CREATE_SCHEMA, USERNAME, PWD)) {
            Statement st = conn.createStatement();
            int exResult = st.executeUpdate("CREATE SCHEMA `" + schemaName + "`");
            if (exResult > 0) {
                System.out.println("Create Schema Result: successfully created");
                System.out.println("Create Schema Code:" + exResult);
            }
            st.close();
        } catch (SQLException e) {
            sqlErrorLog(e);
        }
    }

    public static void jdbc_dropSchema(String CONN_STRING_CREATE_SCHEMA, String USERNAME, String PWD, String schemaName) {
        try (Connection conn = DriverManager.getConnection(CONN_STRING_CREATE_SCHEMA, USERNAME, PWD)) {
            Statement st = conn.createStatement();
            int exResult = st.executeUpdate("DROP DATABASE `" + schemaName + "`");
            System.out.print(exResult);
            if (exResult == 0) {
                System.out.println("Drop Schema Result: successfully dropped");
                System.out.println("Drop Schema Code:" + exResult);
            }
            st.close();
        } catch (SQLException e) {
            sqlErrorLog(e);
        }
    }

    public static void jdbc_createAdmin(String CONN_STRING_CREATE_SCHEMA, String USERNAME, String PWD, String newUSERNAME, String newPWD) {
        try (Connection conn = DriverManager.getConnection(CONN_STRING_CREATE_SCHEMA, USERNAME, PWD)) {
            Statement st = conn.createStatement();
            int exResult;
            exResult = st.executeUpdate("CREATE USER '" + newUSERNAME + "'@'%' IDENTIFIED BY '" + newPWD + "'");
            System.out.print(exResult);

            exResult = st.executeUpdate("GRANT ALL PRIVILEGES ON *.* TO '" + newUSERNAME + "'@'%' WITH GRANT OPTION");
            System.out.print(exResult);

            st.close();
        } catch (SQLException e) {
            sqlErrorLog(e);
        }
    }

    public static void sqlErrorLog(SQLException e) {
        System.out.println("SQLException: " + e.getMessage());
        System.out.println("SQLState: " + e.getSQLState());
        System.out.println("VendorError: " + e.getErrorCode());
    }
}
