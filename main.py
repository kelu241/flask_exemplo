
from flask import Flask , request , json, jsonify, render_template
import requests

url = 'https://pokeapi.co/api/v2/pokemon?limit=10'
app = Flask(__name__)
pokemons = requests.get(url).json()



@app.route('/pocker', methods= ["GET"])
def Pocke():
    return render_template('template.html', pokemons = pokemons )

if __name__ ==  "__main__":
    app.run(host='127.0.0.1', debug=True, port='3450' )

