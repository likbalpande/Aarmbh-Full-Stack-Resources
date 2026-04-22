import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from supabase import create_client


# ---------------- Load environment variables (secrets) ---------------- #
from dotenv import load_dotenv
load_dotenv()


# ---------------- Create Flask App ---------------- #
app = Flask(__name__)
CORS(app)


# ---------------- Supabase connection setup ---------------- #
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)


# ---------------- Default Image ---------------- #
NO_IMAGE_URL = "https://development-and-testing-bucket-abcdxyz1234.s3.ap-south-1.amazonaws.com/no-pictures.png"


# ---------------- ROUTES ---------------- #
@app.route("/")
def base_app():
    return {
        "status": "App is running..."
    }


# Here we read all products
@app.route("/products")
def read_all_products():
    res = supabase.table("products").select("*").execute()
    return {
        "products": res.data
    }


# Here we create a new product in our database
@app.route("/products", methods=["POST"])
def create_product():
    
    data = request.get_json()
    
    if not data or not data.get("title"):
        return {"error": "title is required"}, 400

    if not data.get("price"):
        return {"error": "price is required"}, 400

    if not data.get("rating"):
        return {"error": "rating is required"}, 400

    new_product = {
        "title": data["title"],
        "price": data["price"],
        "rating": data["rating"],
        "thumbnail": data.get("thumbnail", NO_IMAGE_URL),
    }

    res = supabase.table("products").insert(new_product).execute()

    return res.data, 201


# ---------------- Run the App ---------------- #
if __name__ == "__main__":
    app.run(port=5001, debug=True)