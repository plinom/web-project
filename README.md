# web-project

#### This is gym app within the framework web course

## Up localy

#### Back-end

```
cd back-end/
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload

* open http://localhost:8000/docs/
```

#### Front-end

```
cd front-end/
bun install
bun run dev

* open http://localhost:5173/
```

## Up in docker

#### Up Front-end

```
docker pull ghcr.io/plinom/web-project/front-end:0.0.1
docker run -p 5173:5173 ghcr.io/plinom/web-project/front-end:0.0.1

* open http://localhost:5173/
```

#### Up Front-end

```
docker pull ghcr.io/plinom/web-project/back-end:0.0.1
docker run -p 8000:8000 ghcr.io/plinom/web-project/back-end:0.0.1

* open http://localhost:8000/docs/
```
