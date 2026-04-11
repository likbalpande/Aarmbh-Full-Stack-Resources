from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/products")
def index():
    return {
        "products": [
            {
                "title": "BAG BAG 123",
                "price": "$200",
                "rating": 4.2,
                "thumbnail": "https://images.jdmagicbox.com/quickquotes/images_main/sara-30-liters-polyester-black-school-bag-black-178207114-ksaft.jpg",

            },
            {
                "title": "Mat",
                "price": "$100",
                "rating": 3.9,
                "thumbnail": "https://rukminim2.flixcart.com/image/480/640/l58iaa80/mat/z/t/w/medium-natural-korai-grass-sleeping-mat-3-5-x-6-feet-river-grass-original-imagfyhgq4jvgmrg.jpeg?q=90",
            }
        ]
    }

app.run(port=5001, debug=True)




