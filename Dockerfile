# Utilitza la imatge base de Node.js
FROM node:20-slim
# Creem un directori de treball
WORKDIR /app
# Cambiar el propietario del directorio al usuario 'node' permite que el usuario pueda escribir/instalar sin ser root
RUN chown -R node:node /app
#Empra l’usuari per defecte que crea node per a no executar com administrador.
USER node
# Copia els fitxers de dependències primer amb els permisos correctes.
COPY --chown=node:node package*.json ./
# Instal·la les dependències.
RUN npm install
# Copia la resta dels fitxers del projecte.
COPY --chown=node:node . .
# Exposa només el port necessari
EXPOSE 3000
# Comanda per executar l’app.
CMD ["node", "app.js"]