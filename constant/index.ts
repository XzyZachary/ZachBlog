export const BLUR_IMAGE_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvWS1LgAGJQIpt50GkgAAAABJRU5ErkJggg=='

export const LOGO_IMAGE_PATH = '/static/images/logo.jpg'

export const GISCUS_COMMENTS_ID = 'comments-container'
export const UTTERANCES_COMMENTs_ID = 'comments-container'
export const DISQUS_COMMENTS_ID = 'disqus_thread'

export const HEADER_HEIGHT = '69px'
export const FOOTER_HEIGHT = '188px'
export const MAIN_CONTENT_MIN_HEIGHT = `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`

export const SPOTIFY_TOKEN_API = `https://accounts.spotify.com/api/token`
export const SPOTIFY_NOW_PLAYING_API = `https://api.spotify.com/v1/me/player/currently-playing`
export const SPOTIFY_TOP_TRACKS_API = `https://api.spotify.com/v1/me/top/tracks`

export const TOKEN_CLASSNAME_MAP = {
  tag: 'text-code-red',
  'attr-name': 'text-code-yellow',
  'attr-value': 'text-code-green',
  deleted: 'text-code-red',
  inserted: 'text-code-green',
  punctuation: 'text-code-white',
  keyword: 'text-code-purple',
  string: 'text-code-green',
  function: 'text-code-blue',
  boolean: 'text-code-red',
  comment: 'text-gray-500 italic',
}

export const POSTS_PER_PAGE = 5
export const FEATURED_POSTS = 5
