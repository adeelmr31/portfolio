const NewsCardFooter = ({ data }) => {
    const { title, author, pubDate, description, link } = data;
    const extractThumbnail = (html) => {
        const imgMatch = html.match(/<img[^>]+src="([^">]+)"/); // Match the first <img> tag and extract the src
        return imgMatch ? imgMatch[1] : "/static/defaultThumbnail.png"; // Fallback image
    };

    const thumbnail = extractThumbnail(description);
    return (
        <div onClick={() => window.open(link,'_blank')} data-aos="fade-up" className="news__div">
              <img src={thumbnail} alt="news" />
              <div className="details">
                <p className="hover__text">
                  {title}
                </p>
              </div>
            </div>
    );
};

export default NewsCardFooter;
