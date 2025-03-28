FROM python:3

WORKDIR /usr/src/app

COPY ./meuPythonVirtual/bin/requirements ./

# RUN python3 -m pip install -r requirements --break-system-packages

COPY . .

CMD [ "./meuPythonVirtual/bin/python3", "main.py"]

