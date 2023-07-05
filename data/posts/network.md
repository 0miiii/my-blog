---
id: 7
title: "네트워크 알아보기"
date: "2023-06-22"
category: "study"
tags: ["#network"]
---

# 1. 네트워크, 인터넷

## 네트워크

두 대 이상의 컴퓨터가 연결되어 통신하는 것(데이터를 주고 받을 수 있는 구조) 입니다.

네트워크는 LAN과 WAN과 같은 다양한 형태로 구성될 수 있습니다.

## 인터넷

인터넷은 네트워크의 집합체입니다. 여러 네트워크를 연결하여 데이터를 주고 받을 수 있는 환경을 제공합니다.

TCP/IP 프로토콜 스위트를 기반으로 동작합니다.

# 2. 프로토콜

프로토콜은 통신을 위한 규약 또는 약속입니다. 프로토콜은 데이터를 어떻게 구조화하고 전송하며, 상호 간의 통신 절차 및 규칙을 정의합니다.

프로토콜은 다양하게 존재하며 웹 애플리케이션 아키텍처에서 클라이언트와 서버간의 통신은 주로 웹에서 문서 전송을 위한 HTTP 프로토콜을 사용합니다.

클라이언트는 HTTP 요청 메시지를 서버에 보내고, 서버는 이에 대한 응답 메시지를 클라이언트에 반환하여 상호 작용합니다.

HTTP 메시지는 클라이언트와 서버 간에 주고받는 데이터의 형식입니다. HTTP 요청 메시지에는 클라이언트가 원하는 동작(예: 웹 페이지 요청)과 추가적인 정보(예: 요청 헤더)가 포함되어 있습니다. 서버는 이 요청에 대한 적절한 응답을 생성하여 클라이언트에게 반환합니다. HTTP 응답 메시지에는 응답 상태 코드(예: 200 OK)와 응답 본문(예: 웹 페이지 내용)이 포함됩니다.

프로토콜은 다른 분야에서도 널리 사용됩니다. 예를 들어, 전자 메일 통신을 위한 SMTP(Simple Mail Transfer Protocol), 파일 전송을 위한 FTP(File Transfer Protocol), 인터넷 프로토콜(IP) 등이 있습니다. 각 프로토콜은 특정 목적과 요구 사항을 충족하기 위해 설계되었으며, 통신 당사자 간의 원활한 데이터 교환을 보장하기 위해 사용됩니다.

3. 허브

허브는 네트워크를 연결하는 역할을 합니다. 허브는 컴퓨터 및 다른 네트워크 장치들을 연결하여 데이터를 전송하고 받을 수 있도록 합니다.

허브는 여러 개의 포트를 가지고 있으며, 이 포트를 사용하여 컴퓨터나 다른 네트워크 장치를 연결합니다. 연결된 장치는 허브를 통해 데이터를 전송하고, 허브는 받은 데이터를 연결된 모든 포트로 복제하여 전달합니다. 이러한 방식으로 허브는 연결된 장치 간에 데이터를 공유하고 통신할 수 있게 됩니다.

그러나 허브는 데이터를 전달하는 방식에서 한계가 있습니다. 허브는 데이터 충돌이 발생할 수 있는데, 하나의 포트로 들어온 데이터를 다른 모든 포트로 복제하기 때문입니다. 따라서 동시에 데이터를 전송하는 경우 충돌이 발생하고 네트워크 성능이 저하될 수 있습니다.

최신 네트워크에서는 허브 대신 스위치가 주로 사용됩니다. 스위치는 허브보다 효율적인 데이터 전송을 제공하며 충돌 도메인을 분리하여 네트워크 성능을 향상시킵니다. 그러나 허브는 몇 가지 특정한 상황에서 여전히 사용될 수 있습니다.

요약하자면, 허브는 여러 컴퓨터 및 네트워크 장치를 연결하여 네트워크를 구성하고, 데이터를 전송하는 역할을 합니다. 하지만 데이터 충돌이 발생할 수 있고 성능 제약이 있으므로, 스위치를 사용하는 것이 보다 효율적입니다.

허브는 연결된 장치 간에 데이터를 공유하기 위해 데이터를 모든 포트로 복제하는 방식을 사용합니다. 이로 인해 데이터 충돌이 발생할 수 있고, 네트워크 성능이 저하될 수 있습니다. 또한, 허브는 충돌 도메인을 형성하여 네트워크 트래픽을 분리하지 않습니다.

4. 스위치

스위치는 연결된 장치 간에 데이터를 직접 전달하고, 충돌 없이 개별적인 통신 경로를 제공하는 장치입니다.

스위치는 개별 포트 간에 데이터를 전송하므로 데이터 충돌이 발생하지 않습니다. 스위치는 수신한 데이터를 해당하는 포트로만 전달하므로, 네트워크 트래픽을 분리하여 충돌 도메인을 형성합니다. 이를 통해 스위치는 효율적인 데이터 전송과 더 나은 성능을 제공합니다.

스위치는 또한 스위칭 테이블을 사용하여 MAC 주소를 기반으로 데이터를 전송하며, 목적지 포트를 빠르게 결정할 수 있습니다. 이는 네트워크 트래픽을 관리하고 스위치가 가진 대역폭을 최대한 활용할 수 있도록 합니다.

따라서, 스위치는 허브의 단점을 보완하여 충돌 없는 데이터 전송과 개별 포트 간의 효율적인 통신을 제공합니다. 스위치는 네트워크 성능을 향상시키고, 복잡한 네트워크에서도 효율적인 데이터 전송을 가능하게 합니다.

5. 라우터

라우터는 LAN들을 연결해주는 역할을 합니다. 라우터는 여러 개의 로컬 에어리어 네트워크 (LAN)를 연결하고, 패킷을 목적지로 전달하는 장치입니다.

라우터는 각 LAN에 대한 IP 주소를 할당하고, 패킷을 받아서 목적지 IP 주소를 확인한 후 적절한 경로를 선택하여 전달합니다. 이를 통해 다양한 LAN 간의 통신을 가능하게 하며, 네트워크 간의 분리와 보안을 유지할 수 있습니다.

따라서 라우터는 LAN들을 연결하여 하나의 네트워크로 구성하고, LAN 간의 통신을 가능하게 하는 중요한 역할을 합니다.

8. LAN/WAN
9. NIC
10. 이더넷 프로토콜
11. MAC 주소

네트워크와 인터넷: 네트워크는 두 개 이상의 컴퓨터가 연결되어 통신하는 것을 의미합니다. 인터넷은 전 세계적으로 연결된 많은 네트워크의 집합체로서, 네트워크와 네트워크 간의 연결을 제공하는 것을 의미합니다.

프로토콜: 프로토콜은 통신을 위한 규약 또는 약속으로, 데이터의 구조화와 전송, 통신 절차 및 규칙을 정의합니다리. HTTP 프로토콜은 웹 애플케이션에서 사용되는 하나의 프로토콜이며, 클라이언트와 서버 간의 통신을 위해 사용됩니다.

허브: 허브는 여러 컴퓨터 및 네트워크 장치를 연결하여 네트워크를 구성하고 데이터를 전송하는 역할을 합니다. 하지만 허브는 데이터 충돌이 발생할 수 있고 성능 제약이 있으므로, 스위치가 보다 효율적입니다.

라우터:

TCP/IP 4계층

- 응용 계층: 응용프로그램에서 데이터가 생성됩니다.
- 전송 계층: 응용프로그램에서 운영체제로 데이터가 전달되고, 이때 포트번호가 할당됩니다.
- 인터넷 계층: 운영체제에서 IP 주소를 기반으로 데이터를 캡슐화합니다.
- 네트워크 액세스 계층: NIC에서 MAC 주소를 기반으로 데이터를 캡슐화합니다.

이렇게 캡슐화된 데이터의 이름을 프레임이라고 합니다. 마지막으로 물리적인 유, 무선 매체를 통해 bit 단위로 전송하게 됩니다.

NIC(Network Interface Controller): 컴퓨터의 고유 주소를 표시하며 컴퓨터가 네트워크로 접속하기 위해 반드시 필요한 장치입니다. NIC 주소를 표기하는 방법으로 가장 많이 사용되고 있는 것은 이더넷 프로토콜입니다. 이더넷 프로토콜은 주소를 표시하기 위해 MAC 주소를 사용합니다. 여기서 미디어란 이더넷 케이블, 광섬유 케이블과 같은 유선을 의미하거나 와이파이 같은 무선을 뜻합니다.