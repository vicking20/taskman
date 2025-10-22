## Project Setup and Running Instructions

---

### Backend (Server)

This folder is reserved for **server-side implementation**, which handles sending/receiving requests through **API calls** and implementing them into the **local database** it connects to.

#### Prerequisites & Environment

* **Node.js Version:** The minimum required Node version is **18**.
* **Database:** This project depends on **PostgreSQL** for database activities. Install PostgreSQL on your machine and configure your database.

#### Environment Variables (.env)

Create an environment file (`.env`) in the server's root directory to save credentials.

| Variable | Description |
| :--- | :--- |
| `PORT` | 5000 (or `some other port you configure yourself`). |
| `CLIENT_URL` | URL of the frontend client. |
| **PostgreSQL Variables** | |
| `DB_USER` | PostgreSQL user. |
| `DB_PASS` | PostgreSQL password. |
| `DB_HOST` | Database host (e.g., `localhost`). |
| `DB_NAME` | The name given to your configured PostgreSQL database. |
| `DB_PORT` | Database port (e.g., `5432`). |

#### Setup & Run

1.  **Navigate** to the server folder:
    ```bash
    cd server
    ```
2.  **Install modules**:
    ```bash
    npm install
    ```
3.  **Configuration:** Go to **`server/src/app.ts`** and in **line 12**, input your machine's **(server) IP address**.
4.  **Start the server:**
    ```bash
    npm run start
    ```

---

### Client (Frontend)

The client application connects to the backend via API calls.

#### Setup & Run

1.  **Navigate** to the client folder:
    ```bash
    cd client
    ```
2.  **Install modules**:
    ```bash
    npm install
    ```
3.  **Configuration:** Go to **`client/src/services/apiService.ts`** and in **line 6**, input your machine's **(server) IP address**.
4.  **Run for testing:**
    ```bash
    npm run dev
    ```

#### Access

* You can access the frontend from **`http://localhost:5173`**.
* Alternatively, run the command with the `--host` flag to access it from the machine's IP address on the local network.