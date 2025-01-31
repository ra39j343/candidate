import crypto from 'crypto'

const ALGORITHM = 'aes-256-gcm'
const IV_LENGTH = 16
const SALT_LENGTH = 64
const TAG_LENGTH = 16
const KEY_LENGTH = 32
const ITERATIONS = 100000

export class Encryption {
  private static getKey(password: string, salt: Buffer): Buffer {
    return crypto.pbkdf2Sync(
      password,
      salt,
      ITERATIONS,
      KEY_LENGTH,
      'sha256'
    )
  }

  static encrypt(text: string, secretKey: string): string {
    const salt = crypto.randomBytes(SALT_LENGTH)
    const iv = crypto.randomBytes(IV_LENGTH)
    const key = this.getKey(secretKey, salt)
    
    const cipher = crypto.createCipheriv(ALGORITHM, key, iv)
    
    const encrypted = Buffer.concat([
      cipher.update(text, 'utf8'),
      cipher.final()
    ])
    
    const tag = cipher.getAuthTag()
    
    // Combine everything into a single string
    return Buffer.concat([
      salt,
      iv,
      tag,
      encrypted
    ]).toString('base64')
  }

  static decrypt(encryptedData: string, secretKey: string): string {
    const buffer = Buffer.from(encryptedData, 'base64')
    
    const salt = buffer.subarray(0, SALT_LENGTH)
    const iv = buffer.subarray(SALT_LENGTH, SALT_LENGTH + IV_LENGTH)
    const tag = buffer.subarray(SALT_LENGTH + IV_LENGTH, SALT_LENGTH + IV_LENGTH + TAG_LENGTH)
    const encrypted = buffer.subarray(SALT_LENGTH + IV_LENGTH + TAG_LENGTH)
    
    const key = this.getKey(secretKey, salt)
    const decipher = crypto.createDecipheriv(ALGORITHM, key, iv)
    
    decipher.setAuthTag(tag)
    
    return decipher.update(encrypted) + decipher.final('utf8')
  }
} 