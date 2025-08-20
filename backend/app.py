from flask import Flask, jsonify
import random
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": [
    "http://localhost:5173",  
    "https://taskmanagerd8.netlify.app/"  
]}})

quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don’t let yesterday take up too much of today.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "If you are working on something exciting, it will keep you motivated.",
    "Success is not in what you have, but who you are."
]

@app.route("/api/quote", methods=["GET"])
def get_quote():
    return jsonify({"quote": random.choice(quotes)})

if __name__ == "__main__":
    app.run(debug=False)


