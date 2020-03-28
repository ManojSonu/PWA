# PWA

#to build a docker image we should make use of Dockerfile and the command is
sudo docker build -t <image name>

#to check the built docker image use 
sudo docker images

#to run the docker image use 
sudo docker run -ti --rm <image name>
  
#now the docker images containers are running and in side this container even my Nodejs application is also running.
here the container is completely isolated to listen to the same port use

sudo docker run -it -p 4004:3001 pwa_image
