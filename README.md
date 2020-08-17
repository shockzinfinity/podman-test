# podman-test

> podman 테스트를 위한 repo  
> docker 대신 podman 을 사용합니다.  

### image build & run
```bash
# pod 생성
# pod 를 이용하면 pod 간 독립적인 네트워크가 생성됨
# 그러므로 port 연결은 pod 단위로 매핑하여 연결하는 것이 수월함
$ podman pod create --name my-pod -p 8080:3000

# docker.io registry 에 push/pull 을 위해서는 build 시에 registry를 명시해줘야 함
$ podman build -t nodetest:0.1 .
or
$ podman build -t docker.io/shockz/nodetest:0.1 .

$ podman login docker.io

$ podman push docker.io/shockz/nodetest:0.1
# 확인을 위해 모든 이미지 삭제
$ podman system prune -a
$ podman pull docker.io/shockz/nodetest:0.1

$ podman run -d --rm --pod=my-pod --name nodetest nodetest:0.1
or
$ podman run -itd --rm --pod=my-pod --name nodetest nodetest:0.1

# 데이터 볼륨 연결
# 주의사항 : 데이터 볼륨 연결 덕분에 node_modules 가 재 복사 되는 문제...
$ podman run -itd --rm --pod=my-pod -v /home/shockz/nodetest:/usr/src/nodetest --name nodetest nodetest:0.2

```
