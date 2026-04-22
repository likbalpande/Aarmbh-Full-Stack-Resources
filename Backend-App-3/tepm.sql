CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    price TEXT NOT NULL,
    rating FLOAT NOT NULL,
    thumbnail TEXT
);

INSERT INTO products 
    (
        title, 
        price, 
        rating, 
        thumbnail
    )
VALUES 
    (
        'White Toy Car', 
        'Rs. 700', 
        4.2, 
        'https://development-and-testing-bucket-abcdxyz1234.s3.ap-south-1.amazonaws.com/toy-car-1.avif'
    );

INSERT INTO products 
(
    title, 
    price, 
    rating, 
    thumbnail
)
VALUES 
(
    'Black Toy Car', 
    'Rs. 1100', 
    4.7, 
    'https://development-and-testing-bucket-abcdxyz1234.s3.ap-south-1.amazonaws.com/toy-car-2.avif'
);


INSERT INTO products 
    (
        title, 
        price, 
        rating, 
        thumbnail
    )
VALUES 
('Sports shoes', 'Rs. 4100', 4.4, 'https://development-and-testing-bucket-abcdxyz1234.s3.ap-south-1.amazonaws.com/sports-shoes.avif');

INSERT INTO products 
    (
        title, 
        price, 
        rating, 
        thumbnail
    )
VALUES 
('Ladies bag', 'Rs. 1700', 4.5, 'https://development-and-testing-bucket-abcdxyz1234.s3.ap-south-1.amazonaws.com/ladies-bag.avif');


SELECT * FROM products;