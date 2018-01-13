#encoding = 'utf-8'
from flask import Flask, render_template,request,url_for
import config
from models import User
from exts import db
import os

app = Flask(__name__)
app.config.from_object(config)
db.init_app(app)

@app.route('/',methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/result')
def result():
    return render_template('result.html')

@app.route('/huan')
def huan():
    return render_template('huan.html')

@app.route('/index',methods=['POST'])
def save_shu():
    data = request.json
    print(data,len(data),type(data))
    #db.drop_all()之前用错了，这这个是删除所有表，然后就炸了
    all = User.query.all()
    count = User.query.count()
    print(all)
    print(count)
    for i in range(count):
        db.session.delete(User.query.all()[0])#不是db.session.delete(User.query.all()[i]),因为每次删除后数量减少了
    db.session.commit()
    for i in range(len(data)):
        data_x = data[i]
        insert_x = User(num = data_x['num'],name = data_x['name'],time = data_x['time'],pre = data_x['pre'],todo = None,ES =None,EF=None,TF=None,LS=None,FF=None,LF=None)
        db.session.add(insert_x)
        db.session.commit()
        print(User.query.filter().all())
    #如果文件存在删除
    os.chdir(r'C:\Users\PC\PycharmProjects\shujujiegou')
    print(os.path.exists('flag.txt'))
    if os.path.exists('flag.txt'):
        os.remove('flag.txt')
    #print(os.getcwd())
    #print(os.getcwd())
    os.chdir(r'C:\Users\PC\PycharmProjects\shujujiegou\Debug')
    os.system(r'precedence_network_diagram_data_structure.exe')
    #如果有环
    os.chdir(r'C:\Users\PC\PycharmProjects\shujujiegou')
    print(os.path.exists('flag.txt'))
    print(os.getcwd())
    os.chdir(r'C:\Users\PC\PycharmProjects\shujujiegou')
    print(os.getcwd())
    print(os.system(r'test.exe'))
    return 'aaa'

if __name__ == '__main__':
    os.system('explorer "http://127.0.0.1:5000"')
    app.run()
