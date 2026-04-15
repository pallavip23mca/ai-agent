
def test_app_layout_structure():
    html_content = """
<div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow p-4">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-xl font-bold text-gray-800">AI Agent Platform</h1>
            <nav>
                <ul class="flex space-x-4">
                    <li><a href="#" class="text-gray-600 hover:text-blue-600">Dashboard</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-blue-600">Agents</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-blue-600">Tools</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-blue-600">Settings</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Main Content Area -->
    <main class="flex-grow container mx-auto p-4">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Welcome to your AI Agent Dashboard</h2>
        <div class="bg-white rounded-lg shadow p-6">
            <p class="text-gray-700">This is the main content area where agent information and controls will be displayed.</p>
            <!-- Placeholder for specific agent views or data -->
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4 mt-8">
        <div class="container mx-auto text-center">
            <p>&copy; 2023 AI Agent Platform. All rights reserved.</p>
        </div>
    </footer>
</div>
    '''

    # Check for the main layout div and its classes
    assert '<div class="min-h-screen flex flex-col">' in html_content, "Main layout div with correct classes not found"

    # Check for header and its classes
    assert '<header class="bg-white shadow p-4">' in html_content, "Header with correct classes not found"
    assert '<h1>AI Agent Platform</h1>' in html_content, "Header title not found"
    assert '<nav>' in html_content, "Navigation not found in header"

    # Check for main content area and its classes
    assert '<main class="flex-grow container mx-auto p-4">' in html_content, "Main content area with correct classes not found"
    assert '<h2>Welcome to your AI Agent Dashboard</h2>' in html_content, "Main content heading not found"
    assert '<p class="text-gray-700">This is the main content area' in html_content, "Main content paragraph not found"

    # Check for footer and its classes
    assert '<footer class="bg-gray-800 text-white p-4 mt-8">' in html_content, "Footer with correct classes not found"
    assert '</footer>' in html_content, "Footer closing tag not found"
    assert '&copy; 2023 AI Agent Platform. All rights reserved.' in html_content, "Footer copyright text not found"

    print("All layout structure tests passed!")

# To run the test, you would typically call:
# test_app_layout_structure()
