import socket
import threading
import time

def dealClient(sock,addr):
    print('Accept new connection from %s:%s...'%addr)
    sock.send(b'Hello, I am server!')               #send data
    while True:
        data=sock.recv(1024)            #recv data
        time.sleep(1)
        if not data or data.decode('utf-8')=='exit':
            break
        print ('-->>%s! '%data.decode('utf-8'))
        sock.send(('Loop_Msg: %s'%data.decode('utf-8')).encode(('utf-8')))    #send datda/utf-8 encode
    sock.close()                #传输完毕，关闭socket
    print('Connection from %s:%s closed'%addr)


if __name__=="__main__":
    s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)    #创建socket
    s.bind(('127.0.0.1',9999))                  #绑定socket到本地的IP与端口
    s.listen(5)                 #开始监听连接
    print('Waiting for connection...')
    while True:                     #进入循环，不断接受客户端的连接请求
        sock,addr=s.accept()            #接收一个新连接
        t=threading.Thread(target=dealClient,args=(sock,addr))      #创建新线程处理tcp连接
        t.start()

