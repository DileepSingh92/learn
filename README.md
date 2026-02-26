# React + .NET Android APK Starter

This repository contains a starter structure for building:

- a **React** frontend (web app)
- an **ASP.NET Core (.NET)** backend API
- an **Android APK** using **Capacitor** wrapping the React build

> Note: `.NET SDK` is not installed in this environment, so backend build commands are documented but were not executed here.

## Project structure

- `frontend/` — React app source
- `backend/` — ASP.NET Core minimal API source

## 1) Frontend setup

```bash
cd frontend
npm install
npm run dev
```

## 2) Backend setup

```bash
cd backend
dotnet restore
dotnet run
```

Default API URL in this template: `http://localhost:5000`.

## 3) Build Android APK with Capacitor

From `frontend/`:

```bash
npm install
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

Then in Android Studio:
- Build > Build Bundle(s) / APK(s) > Build APK(s)

## Notes

- For production, set `VITE_API_URL` in frontend env files.
- Enable CORS in backend for the frontend origin.
- If you want a single-stack alternative, consider `.NET MAUI Blazor`.
