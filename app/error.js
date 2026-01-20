'use client'

// Error page constants
const ERROR_MESSAGES = {
  TITLE: 'Bir Hata Oluştu',
  DESCRIPTION: 'Üzgünüz, beklenmedik bir hata oluştu. Lütfen sayfayı yeniden yüklemeyi deneyin.',
  RETRY_BUTTON: 'Tekrar Dene',
  HOME_BUTTON: 'Ana Sayfaya Dön',
  DETAILS_TITLE: 'Hata Detayları (Geliştirme Modu)'
};

export default function Error({ error, reset }) {
  // Log error in development mode for debugging
  if (process.env.NODE_ENV === 'development' && error) {
    console.error('Error boundary caught an error:', error);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center" role="alert" aria-live="assertive">
        <div className="mb-6">
          <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {ERROR_MESSAGES.TITLE}
        </h1>
        <p className="text-gray-600 mb-6">
          {ERROR_MESSAGES.DESCRIPTION}
        </p>
        <div className="space-y-4">
          <button
            onClick={() => reset()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            aria-label={ERROR_MESSAGES.RETRY_BUTTON}
          >
            {ERROR_MESSAGES.RETRY_BUTTON}
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            aria-label={ERROR_MESSAGES.HOME_BUTTON}
          >
            {ERROR_MESSAGES.HOME_BUTTON}
          </button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              {ERROR_MESSAGES.DETAILS_TITLE}
            </summary>
            <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
              {error?.stack || error?.message || 'No error details available'}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}