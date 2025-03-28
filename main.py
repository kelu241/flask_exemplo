
from flask import Flask , request , json, jsonify, render_template
import requests

url = 'http://node_luciano:3333/pocker'
app = Flask(__name__)
pokemons = requests.get(url).json()

print(pokemons)

@app.route('/pocker', methods= ["GET"])
def Pocke():
    return render_template('template.html', pokemons = pokemons )

if __name__ ==  "__main__":
    app.run(host='0.0.0.0', debug=True, port='3450' )

