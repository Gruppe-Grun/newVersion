import { Request, Response, Express } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Database } from '../database'

export class API {
  app: Express
  database: Database

  constructor(app: Express, database: Database) {
    this.app = app
    this.database = database

    this.app.post('/register', this.registerUser)
    this.app.post('/login', this.loginUser)

    //this.app.get('/comments')
  }

  registerUser = async (req: Request, res: Response) => {
    const { username, password } = req.body
    
    const userExists = await this.database.executeSQL(
      `SELECT * FROM users WHERE Username='${username}'`
    );
    if (userExists.length > 0) {
      res.status(409).send({ message: 'Username already exists' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    try {
      await this.database.executeSQL(
        `INSERT INTO users (Username, Password) VALUES ('${username}', '${hashedPassword}')`
      )
      res.status(201).json({ message: 'User registered successfully' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error registering user' })
    }
  }

  loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
  
    try {
      const result = await this.database.executeSQL(
        `SELECT * FROM users WHERE Username='${username}'`
      );
      const user = result[0];
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Add console.log statements to debug the issue
      console.log('Provided password:', password);
      console.log('Stored password:', user.Password);
  
      const isPasswordCorrect = await bcrypt.compare(password, user.Password);
  
      if (!isPasswordCorrect) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      const token = jwt.sign({ id: user.StudentID, username: user.Username }, process.env.JWT_SECRET as string, {
        expiresIn: '1h',
      });
  
      res.status(200).json({ token, message: 'Logged in successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error logging in' });
    }
  }
  
  
}
