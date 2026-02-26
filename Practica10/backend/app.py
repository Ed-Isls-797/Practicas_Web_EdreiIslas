from flask import Flask, request,jsonify
from flask_cors import CORS
from models.game_model import get_all_games
create_game

app = Flask(__name__)
CORS(app)

@app.route('/games', methods=['GET'])
def get_games():
    games = get_all_games()
    return jsonify(games),200

@app.route('/games', methods=['POST'])
def add_games():
    data = request.json
    game_id = create_game(data)

    return jsonify({
        "message": "Videojuego agregado",
        "id": game_id
    }),201

if __name__ == '__main__':
    app.run(debug=True)