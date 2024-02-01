# TCP

TCP（传输控制协议）是一种面向连接的、可靠的传输层协议，它提供了数据传输的顺序保证、数据完整性校验以及拥塞控制机制。TCP广泛应用于需要高可靠性的网络服务，如网页浏览、文件传输和电子邮件等。

## 报文格式

![TCP 报文格式](https://neo927.oss-rg-china-mainland.aliyuncs.com/img/wiki/image-20240201140619203.png)

1. 源端口号（Source Port）和目的端口号（Destination Port）: 这两个字段各自占16位，分别用于标识发送方和接收方的端口号。

2. 序列号（Sequence Number）: 32位的字段，用于标识从TCP发送方向TCP接收方发送的数据字节流中的第一个字节的序号。

3. 确认号（Acknowledgment Number）: 当ACK标志位为1时，这个32位的字段包含了接收方期望收到的下一个序列号，即接收方已成功接收到的数据字节序号加1。

4. 数据偏移（Data Offset）: 4位字段，指示了TCP头部的长度，以32位字为单位。这是因为TCP头部可能包含一个可变长度的选项字段。

5. 保留（Reserved）: 保留位用于将来的扩展，目前应该置为0。

6. 控制位（Control Bits）: 包括URG、ACK、PSH、RST、SYN和FIN等标志位，用于控制TCP的状态机。

7. 窗口大小（Window Size）: 16位的字段，用于流量控制，表示接收方还能接收的字节数。

8. 校验和（Checksum）: 16位字段，用于错误检测，包括头部和数据。

9. 紧急指针（Urgent Pointer）: 当URG标志位被设置时，这个字段是有效的，指示了紧急数据的结束位置。

10. 选项（Options）: 长度可变，用于参数协商，如最大报文段长度（MSS）、窗口缩放因子等。



## 三次握手

![image-20240201141545511](https://neo927.oss-rg-china-mainland.aliyuncs.com/img/wiki/image-20240201141545511.png)
