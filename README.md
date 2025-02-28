INSTALACION DE NODEJS

# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"
# Download and install Node.js:
nvm install 22
# Verify the Node.js version:
node -v # Should print "v22.14.0".
nvm current # Should print "v22.14.0".
# Verify npm version:
npm -v # Should print "10.9.2".


INSTALACION DE PYTHON

sudo apt install python3
sudo apt-get install python3-venv
sudo apt install python3-pip
python3 -m venv venv
pip install django
source venv/bin/activate


python3 manage.py runserver

cd client/
npm install
npm run dev
