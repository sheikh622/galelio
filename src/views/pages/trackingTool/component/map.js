import React from 'react'

const map = () => {
  return (
    <div className="map" >
    <iframe
    title="Google Maps"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14163054.451278724!2d58.36315103710593!3d29.928322496406828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1683198928758!5m2!1sen!2s"  width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
    </div>
  )
}

export default map
