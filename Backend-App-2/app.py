
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


products = [
    {
        "id": 1,
        "title": "White Toy Car",
        "price": "Rs. 700",
        "rating": 4.2,
        "thumbnail":"https://development-and-testing-bucket-abcdxyz1234.s3.ap-south-1.amazonaws.com/toy-car-1.avif"
    },
    {
        "id": 2,
        "title": "Black Toy Car",
        "price": "Rs. 1100",
        "rating": 4.7,
        "thumbnail":"https://development-and-testing-bucket-abcdxyz1234.s3.ap-south-1.amazonaws.com/toy-car-2.avif"
    },
    {
        "id": 3,
        "title": "Sports shoes",
        "price": "Rs. 4100",
        "rating": 4.4,
        "thumbnail":"https://development-and-testing-bucket-abcdxyz1234.s3.ap-south-1.amazonaws.com/sports-shoes.avif"
    },
    {
        "id": 4,
        "title": "Ladies bag",
        "price": "Rs. 1700",
        "rating": 4.5,
        "thumbnail":"https://development-and-testing-bucket-abcdxyz1234.s3.ap-south-1.amazonaws.com/ladies-bag.avif"
    },
]


NO_IMAGE_URL = "https://development-and-testing-bucket-abcdxyz1234.s3.ap-south-1.amazonaws.com/no-pictures.png"


@app.route("/")
def base_app():
    return {
        "status": "App is running..."
    }


@app.route("/products")
def read_all_products():
    return {
        "products": products
    }


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
        "id": max(p["id"] for p in products) + 1 if products else 1,
        "title": data["title"],
        "price": data["price"],
        "rating": data["rating"],
        "thumbnail": data.get("thumbnail", NO_IMAGE_URL),
    }


    products.append(new_product)


    return new_product, 201



if __name__ == "__main__":
    app.run(port=5001, debug=True)