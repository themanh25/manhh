import java.io.*;
import java.net.*;

public class FileReceiverServer {
    public static void main(String[] args) {
        int port = 12345;
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Server is listening on port " + port);
            try (Socket socket = serverSocket.accept()) {
                System.out.println("Client connected.");
                
                // Nhận tệp từ client
                InputStream inputStream = socket.getInputStream();
                FileOutputStream fileOutputStream = new FileOutputStream("received_file.txt");
                
                byte[] buffer = new byte[4096];
                int bytesRead;
                while ((bytesRead = inputStream.read(buffer)) != -1) {
                    fileOutputStream.write(buffer, 0, bytesRead);
                }
                System.out.println("File received successfully!");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
