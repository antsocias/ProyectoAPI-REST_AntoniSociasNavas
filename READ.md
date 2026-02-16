En aquest fitxer s'indiquen les passes per poder executar 
la imatge antsocias/ifc31c-iaw-socias-antoni:v1.0.0

PASSA1 -> Obtenir imatge
docker pull antsocias/ifc31c-iaw-socias-antoni:v1.0.0

PASSA2 -> Crear un contenidor i executar-lo
docker run -d -p 3000:3000 --name api-padel antsocias/ifc31c-iaw-socias-antoni:v1.0.0

PASSA3 -> Probar API
Anar a un cercador i a la barra d'enllaços introduïr "http://localhost/api/jugadores" o
"http://direccioIP/api/jugadores"