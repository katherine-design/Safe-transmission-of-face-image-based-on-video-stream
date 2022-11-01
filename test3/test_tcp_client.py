import socket

s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)   #创建socket
s.connect(('127.0.0.1',9999))           #socket连接远端地址
print('-->>'+s.recv(1024).decode('utf-8'))      #接收数据
s.send(b'Hello, I am a client')                 #发送数据
print('-->>'+s.recv(1024).decode('utf-8'))          #接收数据，utf-8,解码
s.send(b'exit')                             #发送
s.close()                   #传输完毕后关闭socket