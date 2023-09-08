import { randomUUID } from "node:crypto";
import { Database } from "./database.js";
import { formatRoute } from "./utils/format-route.js";

const database = new Database();

export const routes = [
  {
    method: "POST",
    path: formatRoute("/tasks"),
    handler: (req, res) => {
      const { title, description } = req.body;

      if (!title || !description) {
        return res.writeHead(400).end();
      }

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date().toString(),
        updated_at: new Date().toString(),
      };

      database.insert("tasks", task);

      return res.writeHead(201).end();
    },
  },
  {
    method: "GET",
    path: formatRoute("/tasks"),
    handler: (req, res) => {
      const { search } = req.query;

      const tasks = database.select(
        "tasks",
        search
          ? {
              title: search,
              description: search,
            }
          : null
      );

      return res.end(JSON.stringify(tasks));
    },
  },
  {
    method: "PUT",
    path: formatRoute("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      if (!req.title && !req.description) {
        return res.writeHead(400).end();
      }

      database.update("tasks", id, {
        ...req.body,
        updated_at: new Date().toString(),
      });

      return res.writeHead(204).end();
    },
  },
  {
    method: "DELETE",
    path: formatRoute("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      database.delete("tasks", id);

      return res.writeHead(204).end();
    },
  },
  {
    method: "PATCH",
    path: formatRoute("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      database.updateStatus("tasks", id);

      return res.writeHead(204).end();
    },
  },
];
