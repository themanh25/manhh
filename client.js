import java.io.*;
import java.net.*;

public class FileSenderClient {
    public static void main(String[] args) {
        String serverAddress = "localhost";  // Địa chỉ của server
        int port = 12345;  // Cổng của server
        File file = new File("file_to_send.txt");  // Tệp cần gửi
        
        try (Socket socket = new Socket(serverAddress, port)) {
            System.out.println("Connected to server at " + serverAddress + ":" + port);
            
            // Gửi tệp đến server
            FileInputStream fileInputStream = new FileInputStream(file);
            OutputStream outputStream = socket.getOutputStream();
            
            byte[] buffer = new byte[4096];
            int bytesRead;
            while ((bytesRead = fileInputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }
            System.out.println("File sent successfully!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
