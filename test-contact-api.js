// Quick test for /api/send-email
// Run with: node test-contact-api.js (while dev server is running)

const BASE_URL = 'http://localhost:3000'

async function testContactAPI() {
  console.log('Testing /api/send-email endpoint...\n')

  // Test 1: Missing fields
  console.log('1. Testing missing fields validation...')
  let res = await fetch(`${BASE_URL}/api/send-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Test' })
  })
  console.log(`   Expected 400: ${res.status === 400 ? '✓' : '✗ Got ' + res.status}`)
  console.log(`   Response: ${await res.text()}\n`)

  // Test 2: Invalid email
  console.log('2. Testing invalid email validation...')
  res = await fetch(`${BASE_URL}/api/send-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Test', email: 'notanemail', message: 'test' })
  })
  console.log(`   Expected 400: ${res.status === 400 ? '✓' : '✗ Got ' + res.status}`)
  console.log(`   Response: ${await res.text()}\n`)

  // Test 3: Valid request (will fail if EmailJS not configured)
  console.log('3. Testing valid request format...')
  res = await fetch(`${BASE_URL}/api/send-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      name: 'Test User', 
      email: 'test@example.com', 
      message: 'Test message' 
    })
  })
  console.log(`   Status: ${res.status}`)
  console.log(`   Response: ${await res.text()}\n`)

  // Test 4: Rate limiting (3 requests/min)
  console.log('4. Testing rate limiting (3 requests/min)...')
  for (let i = 1; i <= 4; i++) {
    res = await fetch(`${BASE_URL}/api/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Test', email: 'test@example.com', message: 'spam' })
    })
    console.log(`   Request ${i}: ${res.status} ${res.status === 429 ? '(rate limited ✓)' : ''}`)
  }
}

testContactAPI().catch(console.error)
