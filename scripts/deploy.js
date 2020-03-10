require('dotenv-safe').config()
require('colors')

const SFTPClient = require('ssh2-sftp-client')
const path = require('path')
const sftp = new SFTPClient()

const sftpOptions = {
  host: process.env.WEBDISK_HOST,
  port: process.env.WEBDISK_PORT,
  username: process.env.WEBDISK_USER,
  password: process.env.WEBDISK_PASS
}

console.log(`Connecting to webdisk ${sftpOptions.host}:${sftpOptions.port} as ${sftpOptions.username}...`.green)

;(async () => {
  try {
    await sftp.connect(sftpOptions)
    console.log('Successfully connected and logged in!'.green)

    const cwd = await sftp.cwd()
    console.log(`Current working directory is ${cwd}`.blue)

    const syncPaths = {
      remote: `${cwd}/${process.env.WEBDISK_SYNC_PATH}`,
      local: path.join(process.cwd(), 'src')
    }

    console.log(`Uploading ${syncPaths.local} to ${syncPaths.remote}...`.blue)
    await sftp.uploadDir(syncPaths.local, syncPaths.remote)
    console.log('Done! Disconnecting...'.green)
    await sftp.end()
  } catch (err) {
    console.error('Error in syncing to webdisk: '.red, err)
  }
})()
