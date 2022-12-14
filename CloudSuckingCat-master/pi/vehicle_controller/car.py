# -*- coding: UTF-8 -*-
import RPi.GPIO as GPIO
import time
import socket
class CarController():
    left_pin1 = 21
    left_pin2 = 20
    right_pin1 = 26
    right_pin2 = 19
    def setup(self):
        GPIO.setwarnings(False)
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(self.left_pin1,GPIO.OUT,initial=False)
        GPIO.setup(self.left_pin2,GPIO.OUT,initial=False)
        GPIO.setup(self.right_pin2,GPIO.OUT,initial=False)
        GPIO.setup(self.right_pin1,GPIO.OUT,initial=False)

    def __init__(self):
        self.setup()

    def CarRight(self,runtime):
        self.time=runtime
        GPIO.output(self.left_pin1,GPIO.LOW)
        GPIO.output(self.left_pin2,GPIO.LOW)
        GPIO.output(self.right_pin1,GPIO.LOW)
        GPIO.output(self.right_pin2,GPIO.HIGH)
        time.sleep(self.time)
        self.CarStop()

    def CarLeft(self,runtime):
        self.time=runtime
        GPIO.output(self.left_pin1,GPIO.LOW)
        GPIO.output(self.left_pin2,GPIO.HIGH)
        GPIO.output(self.right_pin1,GPIO.LOW)
        GPIO.output(self.right_pin2,GPIO.LOW)
        time.sleep(self.time)
        self.CarStop()

    def CarBack(self,runtime):
        self.time=runtime
        GPIO.output(self.left_pin1,GPIO.HIGH)
        GPIO.output(self.left_pin2,GPIO.LOW)
        GPIO.output(self.right_pin1,GPIO.HIGH)
        GPIO.output(self.right_pin2,GPIO.LOW)
        time.sleep(self.time)
        self.CarStop()

    def CarForward(self,runtime):
        self.time=runtime
        GPIO.output(self.left_pin1,GPIO.LOW)
        GPIO.output(self.left_pin2,GPIO.HIGH)
        GPIO.output(self.right_pin1,GPIO.LOW)
        GPIO.output(self.right_pin2,GPIO.HIGH)
        time.sleep(self.time)
        self.CarStop()

    def CarStop(self):
        GPIO.output(self.left_pin1,GPIO.LOW)
        GPIO.output(self.left_pin2,GPIO.LOW)
        GPIO.output(self.right_pin1,GPIO.LOW)
        GPIO.output(self.right_pin2,GPIO.LOW)


def doConnect(host,port):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try :
        sock.connect((host,port))
    except :
        pass
    return sock

def RecvCommand():
    host = "xxx.com" # ??????????????????
    port = 8989 # ????????????
    my_sock = doConnect(host,port)
    car = CarController()
    a = 1
    while True:
        try :
            my_sock.send("heartbeat")
            msg = my_sock.recv(1024)
            if msg[0] == 'f':
                print("??????")
                car.CarForward(0.3)
            elif msg[0] == 'l' :
                print("??????")
                car.CarLeft(0.2)
            elif msg[0] == 'r':
                print("??????")
                car.CarRight(0.2)
            elif msg[0] == 'b':
                print("??????")
                car.CarBack(0.3)
            else:
                print("??????")
                car.CarStop()
        except:
            print("network error re connect...",a)
            a = a + 1
            my_sock = doConnect(host,port)
            time.sleep(1)

if __name__ == "__main__" :
    RecvCommand()