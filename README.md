# OS Libraries SPA

# Installing and running

## Scripts

        ./install.sh
        ./start_api.sh
        ./start_spa.sh

## Manual steps

### API server
1. Make sure you have python3 available
2. Go to the API folder

        cd os_library_api

3. Install pipenv and dependencies

        python3 -m pip install pipenv
        pipenv install

4. Run the server

        pipenv run uvicorn app.main:app

5. The API is available at http://localhost:8000

### Running the SPA
1. Make sure you have node, npm available
2. Go to the SPA folder

        cd os-library-spa

3. Install dependencies

        npm install

4. Run the server

        npm start

5. The app is available at http://localhost:3000