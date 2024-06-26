from flask import Flask , request ,jsonify
import utills
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


@app.route('/classify_image',methods=['Get','Post'])
def classify():
    image_data = request.form['image_data']
    
    response = jsonify(utills.classify_image(image_data))
    
    response.headers.add('Access-Control-Allow-Origin','*')
    
    return response
    

if __name__=='__main__':
    print('Stating Flask Server')
    # load the artifacts first
    utills.load_saved_artifacts()
    app.run(port=5000)