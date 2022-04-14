import React from 'react'
function Social() {
    return (
        <div>
            <div className="links">
                <div className="insta">
                <a href = "https://www.facebook.com/profile.php?id=100055286242670">
                <img src={`/image/facebook.png`} alt=" facebook"    />
                </a>
                </div>
                <div className="face">
                <img src={`/image/instagram.png`} alt="instaram"  />
                </div>

            </div>
        </div>
    )
}

export default Social
