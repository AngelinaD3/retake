const DEPLOYMENT_ID = 'AKfycbzmTdZs_btEz9SgpowoVmhcaTNh3G92LbX2a4OsKChV';
const BASE_URL = `https://script.google.com/macros/s/${DEPLOYMENT_ID}/exec`;

/**
 * 
 * @param {string} color 
 * @param {string} [shapeType]
 * @param {number} [clicks]
 * @returns {Promise<boolean>}
 */
export async function saveClickData(color, shapeType, clicks) {
  const payload = {
    color,
    ...(shapeType && { shapeType }), 
    ...(clicks && { clicks }),   
    timestamp: new Date().toISOString()
  };

  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors'
    });

    if (!response.ok && response.type !== 'opaque') {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Failed to save click data:', error);
    return false;
  }
}