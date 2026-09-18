/* ==========================================================================
   Tác giả: Kaito DEV (GitHub: Tson28)
   Mục đích: Quản lý Kho Dự án AI, Game, Share Source Ngọc Rồng Online (NRO), 
             Web/App, Modal chi tiết, Typed.js và menu tương tác.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ------------------------------------------------------------------------
     1. DỮ LIỆU KHO DỰ ÁN & GAME CỦA KAITO DEV (GitHub: Tson28)
     Bao gồm các dự án AI Machine Learning, Share Source Code Ngọc Rồng Online,
     Game 2D/3D, và các dự án Web/Mobile thực chiến từ GitHub Tson28.
     ------------------------------------------------------------------------ */
  const projectsData = [
    // ==================== NHÓM GAME & SHARE SOURCE NRO ====================
    {
      id: "game-nro",
      title: "Ngọc Rồng Online (NRO) - Trọn Bộ Source Code Server Private & Client Mod",
      category: "game",
      categoryLabel: "🎮 Game & Share Src NRO",
      image: "assets/image/img2.png",
      shortDesc: "Chia sẻ trọn bộ mã nguồn Server Ngọc Rồng Online (Java Netty) chuẩn hóa Socket, kèm Client Mod full tính năng auto và Database MySQL hoàn chỉnh.",
      fullDesc: "Dự án chia sẻ mã nguồn phát triển và vận hành Server Private game Ngọc Rồng Online (Dragon Boy Online). Bộ mã nguồn bao gồm Server viết bằng Java thuần kết hợp thư viện mạng Netty xử lý gói tin tốc độ cao, hệ thống cơ sở dữ liệu MySQL tối ưu hóa lưu trữ dữ liệu hàng triệu nhân vật, cùng phiên bản Client Mod hỗ trợ auto train, dịch chuyển nhanh, săn boss và nhặt ngọc tự động.",
      techStack: ["Java Netty", "MySQL", "Socket Networking", "Client Modding", "Reverse Engineering", "Multi-threading"],
      features: [
        "Full hệ thống nhiệm vụ: Sơ sinh, Bang hội, Doanh trại Độc Nhãn, Đại hội Võ thuật và Con đường Rắn độc",
        "Hệ thống đệ tử Ma Bư, hợp thể Bông tai Porata, biến hình Super Saiyan (SSJ 1 đến SSJ 4)",
        "Hệ thống Boss thế giới: Fide, Broly, Xên Bọ Hung, Black Goku xuất hiện tự động theo chu kỳ",
        "Bản Client Mod tích hợp Auto đánh quái, tàn sát, đóng băng skill, chỉnh tốc độ game và chống ngắt kết nối",
        "Kèm file SQL Database mẫu và hướng dẫn cài đặt chạy cục bộ (Localhost) hoặc máy chủ VPS Linux"
      ],
      role: "Server Architect & Modder - Tối ưu hóa mã nguồn Java Netty, fix bug bug nạp ngọc/tiềm năng và đóng gói Client.",
      downloadUrl: "https://github.com/Tson28", // Link tải trọn bộ Source Code & Bản Cài Đặt
      communityUrl: "https://discord.gg/", // Link Discord / Box giao lưu NRO
      demoUrl: "https://github.com/Tson28",
      githubUrl: "https://github.com/Tson28"
    },
    {
      id: "game-ronin",
      title: "Shadow Ronin: Cyberpunk Blade",
      category: "game",
      categoryLabel: "🎮 Dự Án Game",
      image: "assets/image/img6.png",
      shortDesc: "Tựa game hành động chặt chém 3D phong cách Cyberpunk với cơ chế chiến đấu nhanh, hiệu ứng né đòn và đấu trùm kịch tính.",
      fullDesc: "Shadow Ronin: Cyberpunk Blade là dự án Game 3D Hack & Slash được xây dựng trên nền tảng Unity kết hợp ngôn ngữ C#. Người chơi vào vai một kiếm sĩ tương lai chống lại tập đoàn robot bạo tàn. Game tập trung vào trải nghiệm cảm giác chiến đấu phản xạ nhanh (Parry & Dodge), hệ thống kỹ năng Katana nguyên tố và thiết kế màn chơi không gian ánh sáng Neon sống động.",
      techStack: ["Unity 3D", "C#", "Cinemachine", "Shader Graph", "Blender 3D", "FMOD Audio"],
      features: [
        "Cơ chế đao kiếm thời gian thực với hệ thống combo đánh liên hoàn mượt mà 60 FPS",
        "Hệ thống đỡ đòn hoàn hảo (Perfect Parry) và né tránh kích hoạt hiệu ứng Bullet-Time chậm",
        "Trí tuệ nhân tạo (AI) kẻ địch biết phối hợp bao vây và đổi hình thái tấn công",
        "Đồ họa Cyberpunk xử lý hậu kỳ (Post-Processing) với ánh sáng Neon và phản chiếu SSR",
        "Tối ưu hóa đa nền tảng cho cả hệ điều hành Windows PC và thiết bị di động"
      ],
      role: "Game Director & Lead Programmer - Phụ trách thiết kế Gameplay, lập trình nhân vật, hiệu ứng kiếm thuật và dựng mô hình 3D.",
      downloadUrl: "https://github.com/Tson28",
      communityUrl: "https://discord.gg/",
      demoUrl: "https://github.com/Tson28",
      githubUrl: "https://github.com/Tson28"
    },
    {
      id: "game-galactic",
      title: "Galactic Strike Online: Spaceship Arena",
      category: "game",
      categoryLabel: "🎮 Dự Án Game",
      image: "assets/image/img4.png",
      shortDesc: "Đấu trường không gian trực tuyến nhiều người chơi (Multiplayer) hỗ trợ 10 người cùng tham chiến trong phòng chờ thời gian thực.",
      fullDesc: "Tựa game bắn tàu vũ trụ góc nhìn thứ 3 tích hợp hệ thống mạng chơi nhiều người thời gian thực thông qua Photon Engine và Server Node.js. Người chơi có thể tự do tùy chỉnh phi thuyền, trang bị súng Plasma, lá chắn năng lượng và lập đội cùng bạn bè tranh đoạt tài nguyên không gian.",
      techStack: ["Unity", "C#", "Photon PUN2", "Node.js Server", "WebGL", "WebSocket"],
      features: [
        "Mạng chơi nhiều người hỗ trợ 10 người/phòng với độ trễ thấp và cơ chế bù trừ lag (Interpolation)",
        "Hệ thống phòng chờ (Lobby System), mời bạn bè qua link hoặc phòng riêng có mật khẩu",
        "Bảng xếp hạng tiêu diệt (Kill/Death Leaderboard) cập nhật tức thời",
        "Có phiên bản WebGL chơi trực tiếp trên trình duyệt mà không cần cài đặt phần mềm"
      ],
      role: "Multiplayer Network Engineer & Gameplay Programmer - Thiết lập hệ thống đồng bộ hóa tàu chiến và phòng đấu.",
      downloadUrl: "https://github.com/Tson28",
      communityUrl: "https://discord.gg/",
      demoUrl: "https://github.com/Tson28",
      githubUrl: "https://github.com/Tson28"
    },

    // ==================== NHÓM AI & MACHINE LEARNING ====================
    {
      id: "ai-pulsepredict",
      title: "PulsePredict AI - Hệ Thống Dự Đoán Sức Khỏe & Nhịp Tim Bằng Machine Learning",
      category: "ai",
      categoryLabel: "🤖 Trí Tuệ Nhân Tạo",
      image: "assets/image/img3.png",
      shortDesc: "Dự án AI ứng dụng Machine Learning (Python, Scikit-Learn) phân tích dữ liệu y tế đầu vào để dự báo nguy cơ tim mạch sớm và chỉ số nhịp tim.",
      fullDesc: "PulsePredict-App là hệ thống trí tuệ nhân tạo chuyên sâu về xử lý dữ liệu y tế. Dự án sử dụng tập dữ liệu lâm sàng để huấn luyện các thuật toán học máy (Random Forest, Logistic Regression, XGBoost), kết hợp tiền xử lý dữ liệu chuẩn hóa nhằm hỗ trợ dự đoán nguy cơ bệnh lý tim mạch và bất thường nhịp tim với độ chính xác cao.",
      techStack: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
      features: [
        "Huấn luyện và so sánh hiệu năng nhiều mô hình ML, tối ưu siêu tham số đạt độ chính xác > 92%",
        "Tiền xử lý dữ liệu: làm sạch dữ liệu thiếu, chuẩn hóa thang đo (StandardScaler) và mã hóa biến phân loại",
        "Trực quan hóa mức độ quan trọng của từng đặc trưng y tế (Feature Importance) tác động lên nhịp tim",
        "Giao diện tương tác người dùng cho phép nhập chỉ số lâm sàng và trả về xác suất rủi ro tức thì",
        "Tài liệu phân tích mô hình và mã nguồn mở hoàn chỉnh trên GitHub"
      ],
      role: "AI & ML Engineer - Xử lý dữ liệu lâm sàng, huấn luyện mô hình học máy và xây dựng ứng dụng.",
      downloadUrl: "https://github.com/Tson28/PulsePredict-App",
      communityUrl: "https://discord.gg/",
      demoUrl: "https://github.com/Tson28/PulsePredict-App",
      githubUrl: "https://github.com/Tson28/PulsePredict-App"
    },
    {
      id: "ai-medvision",
      title: "MedVision AI - Nhận Diện & Phân Loại Bệnh Học Qua Ảnh Y Tế Bằng Deep Learning",
      category: "ai",
      categoryLabel: "🤖 Trí Tuệ Nhân Tạo",
      image: "assets/image/img5.png",
      shortDesc: "Mô hình mạng nơ-ron tích chập (CNN - ResNet50) nhận diện tổn thương và phân loại bất thường trên ảnh chụp y khoa X-quang/CT.",
      fullDesc: "Hệ thống thị giác máy tính (Computer Vision) ứng dụng kỹ thuật Transfer Learning từ mô hình ResNet50 và PyTorch để phân loại ảnh chụp bệnh học. Ứng dụng bản đồ nhiệt Grad-CAM giúp bác sĩ và chuyên gia theo dõi trực quan vùng ảnh mà mạng nơ-ron tập trung khi đưa ra chẩn đoán.",
      techStack: ["PyTorch", "ResNet-50", "OpenCV", "Python", "Grad-CAM", "Flask API"],
      features: [
        "Tự động tăng cường dữ liệu ảnh (Data Augmentation) chống hiện tượng Overfitting",
        "Bản đồ nhiệt nhiệt Grad-CAM giải thích quyết định của AI (Explainable AI - XAI)",
        "Độ nhạy (Sensitivity) và độ đặc hiệu (Specificity) vượt trội trên các ca bệnh khó",
        "Cung cấp RESTful API cho phép các hệ thống bệnh viện tích hợp nhận diện ảnh tự động"
      ],
      role: "Computer Vision Researcher - Xây dựng Pipeline tiền xử lý ảnh, huấn luyện CNN và xuất bản API.",
      downloadUrl: "https://github.com/Tson28",
      communityUrl: "https://discord.gg/",
      demoUrl: "https://github.com/Tson28",
      githubUrl: "https://github.com/Tson28"
    },
    {
      id: "ai-rag-assistant",
      title: "AI Smart Chatbot & RAG Assistant - Trợ Lý Ảo Hỏi Đáp Tài Liệu Chuyên Sâu",
      category: "ai",
      categoryLabel: "🤖 Trí Tuệ Nhân Tạo",
      image: "assets/image/img8.png",
      shortDesc: "Hệ thống hỏi đáp tài liệu tự động sử dụng kiến trúc RAG kết hợp Vector Database (ChromaDB) và mô hình ngôn ngữ lớn LLM.",
      fullDesc: "Giải pháp trợ lý thông minh cho phép người dùng tải lên tài liệu PDF, Word, mã nguồn và đặt câu hỏi chuyên sâu. Hệ thống tự động phân tách văn bản thành các đoạn ngữ nghĩa (Chunks), tạo vector embeddings và truy xuất thông tin chính xác nhất kèm trích dẫn nguồn gốc tài liệu.",
      techStack: ["LangChain", "OpenAI API / Llama 3", "ChromaDB", "Python FastAPI", "React"],
      features: [
        "Kiến trúc Retrieval-Augmented Generation (RAG) giảm thiểu tối đa hiện tượng ảo giác (Hallucination)",
        "Truy vấn ngữ nghĩa vector với khoảng cách Cosine Similarity cực nhanh",
        "Hỗ trợ giao tiếp song ngữ mượt mà (Tiếng Việt và Tiếng Anh), ghi nhớ ngữ cảnh hội thoại",
        "Tích hợp giao diện chat hiện đại với hiệu ứng phản hồi thời gian thực (Streaming response)"
      ],
      role: "LLM & Full-Stack Developer - Thiết kế kiến trúc RAG, cấu hình cơ sở dữ liệu vector và tích hợp giao diện.",
      downloadUrl: "https://github.com/Tson28",
      communityUrl: "https://discord.gg/",
      demoUrl: "https://github.com/Tson28",
      githubUrl: "https://github.com/Tson28"
    },

    // ==================== NHÓM ỨNG DỤNG MOBILE FLUTTER ====================
    {
      id: "mobile-youtube",
      title: "YouTube Clone App (Flutter & Firebase)",
      category: "mobile",
      categoryLabel: "📱 Ứng dụng Di động",
      image: "assets/image/img2.png",
      shortDesc: "Ứng dụng di động clone đầy đủ giao diện và trải nghiệm của YouTube, hỗ trợ phát video, tìm kiếm và quản lý kênh cá nhân.",
      fullDesc: "Dự án phát triển ứng dụng di động mô phỏng hoàn chỉnh ứng dụng YouTube trên nền tảng Flutter. Tập trung vào việc tái tạo trải nghiệm người dùng gốc: thanh điều hướng mượt mà, khung phát video mini dạng thu nhỏ (Picture-in-Picture), tải dữ liệu bất đồng bộ và đồng bộ tài khoản người dùng qua Firebase.",
      techStack: ["Flutter", "Dart", "Firebase Auth", "YouTube API", "Provider", "Video Player"],
      features: [
        "Giao diện chuẩn xác theo phong cách Material Design của YouTube Mobile",
        "Trình phát video mượt mà hỗ trợ tua nhanh, điều chỉnh chất lượng và khung phát thu nhỏ",
        "Tính năng tìm kiếm video thông minh theo từ khóa và kênh phát sóng",
        "Quản lý danh sách phát (Playlist), video yêu thích và lịch sử xem video cá nhân"
      ],
      role: "Flutter Mobile Developer - Viết toàn bộ UI Components, tích hợp Video Player và kết nối Firebase.",
      downloadUrl: "https://github.com/Tson28/youtube_clone_flutter-master",
      communityUrl: "https://discord.gg/",
      demoUrl: "https://github.com/Tson28/youtube_clone_flutter-master",
      githubUrl: "https://github.com/Tson28/youtube_clone_flutter-master"
    },
    {
      id: "mobile-social",
      title: "SocialMedia Platform Mobile",
      category: "mobile",
      categoryLabel: "📱 Ứng dụng Di động",
      image: "assets/image/img3.png",
      shortDesc: "Mạng xã hội di động mini viết bằng Flutter, cho phép người dùng đăng bài viết kèm ảnh, thích, bình luận và theo dõi bạn bè.",
      fullDesc: "Ứng dụng mạng xã hội tập trung vào cơ chế bảng tin (Feed) hoạt động theo thời gian thực. Tích hợp thư viện tải ảnh thông minh chống giật lag danh sách cuộn, hệ thống xác thực người dùng và bảo mật quyền riêng tư tài khoản cá nhân.",
      techStack: ["Flutter", "Dart", "Firebase Firestore", "Cloud Storage", "Image Picker"],
      features: [
        "Bảng tin cập nhật bài viết thời gian thực (Real-time Feed) đa phương tiện",
        "Tải lên hình ảnh đại diện và bài đăng với thuật toán nén ảnh tiết kiệm dữ liệu",
        "Tương tác trực tiếp: thả tim, bình luận và chia sẻ bài viết giữa người dùng",
        "Hệ thống theo dõi (Follow/Unfollow) và trang cá nhân hiển thị bộ sưu tập bài viết"
      ],
      role: "Sole Mobile Developer - Thiết kế kiến trúc ứng dụng Flutter và cấu hình Cloud Firestore.",
      downloadUrl: "https://github.com/Tson28/SocialMedia",
      communityUrl: "https://discord.gg/",
      demoUrl: "https://github.com/Tson28/SocialMedia",
      githubUrl: "https://github.com/Tson28/SocialMedia"
    },

    // ==================== NHÓM ỨNG DỤNG WEB ====================
    {
      id: "web-socialhub",
      title: "SocialHub Web Platform",
      category: "web",
      categoryLabel: "🌐 Ứng dụng Web",
      image: "assets/image/img4.png",
      shortDesc: "Nền tảng mạng xã hội trên web tập trung vào tính tương tác cao (Front-End interactivity) và thiết kế đáp ứng hoàn hảo mọi thiết bị.",
      fullDesc: "Dự án web mạng xã hội chú trọng vào việc xây dựng giao diện người dùng mượt mà, áp dụng chuẩn CSS hiện đại (Flexbox, Grid, CSS Variables) và tối ưu hóa JavaScript thuần để đạt tốc độ tải trang nhanh kỷ lục mà không phụ thuộc vào thư viện cồng kềnh.",
      techStack: ["JavaScript (ES6+)", "HTML5", "CSS3", "Responsive UI", "Local Storage"],
      features: [
        "Giao diện chuẩn Responsive tương thích trên 100% các kích cỡ màn hình từ điện thoại đến máy tính",
        "Cơ chế tương tác động: chuyển đổi chủ đề Sáng/Tối (Light/Dark Mode) tức thời",
        "Xử lý bài đăng, bình luận và tương tác trực tiếp phía Client",
        "Tối ưu hóa tài nguyên hình ảnh và thời gian tải trang đạt điểm tối đa trên Google Lighthouse"
      ],
      role: "Front-End Developer - Thiết kế giao diện và xây dựng các hiệu ứng tương tác JavaScript.",
      downloadUrl: "",
      communityUrl: "",
      demoUrl: "https://github.com/Tson28/SocialHub-web",
      githubUrl: "https://github.com/Tson28/SocialHub-web"
    },
    {
      id: "web-zunef",
      title: "Zunef Web E-Commerce (Dự Án Kinh Doanh Thực Tế)",
      category: "web",
      categoryLabel: "🌐 Ứng dụng Web",
      image: "assets/image/img6.png",
      shortDesc: "Website thương mại điện tử phục vụ hoạt động bán hàng kinh doanh thực tế, tích hợp giỏ hàng, đặt hàng và quản trị sản phẩm.",
      fullDesc: "Khác với các đồ án lý thuyết, Zunef Web là sản phẩm đã và đang được đưa vào vận hành cho hoạt động kinh doanh thật. Trang web sở hữu quy trình mua sắm trơn tru, biểu mẫu đặt hàng gửi trực tiếp thông báo về hệ thống quản trị và bảo vệ dữ liệu khách hàng nghiêm ngặt.",
      techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Apache"],
      features: [
        "Website thương mại điện tử thực chiến đang phục vụ giao dịch và khách hàng thực tế",
        "Hệ thống danh mục sản phẩm, bộ lọc giá và tìm kiếm từ khóa thông minh",
        "Giỏ hàng mua sắm linh hoạt, tự động tính tổng tiền và phí vận chuyển",
        "Trang Dashboard quản trị (Admin Panel) cập nhật thêm/xóa/sửa sản phẩm và quản lý đơn đặt hàng"
      ],
      role: "Full-Stack Web Master - Phát triển toàn bộ website từ Back-End PHP, Database MySQL đến vận hành thực tế.",
      downloadUrl: "",
      communityUrl: "",
      demoUrl: "https://github.com/Tson28/Zunef-web",
      githubUrl: "https://github.com/Tson28/Zunef-web"
    },
    {
      id: "web-final",
      title: "Hệ Thống Quản Trị & Cơ Sở Dữ Liệu Web Project Final",
      category: "web",
      categoryLabel: "🌐 Ứng dụng Web",
      image: "assets/image/img8.png",
      shortDesc: "Đồ án tốt nghiệp cuối kỳ hoàn thiện với kiến trúc Back-End PHP hướng đối tượng và cơ sở dữ liệu quan hệ MySQL chuẩn hóa.",
      fullDesc: "Dự án tổng hợp toàn diện các kỹ năng lập trình web nâng cao: phân quyền tài khoản đa cấp bậc, xử lý Session/Cookie bảo mật, chống tấn công SQL Injection và XSS, kết hợp giao diện quản trị Bootstrap chuyên nghiệp.",
      techStack: ["PHP", "MySQL", "Bootstrap", "Apache Server", "OOP Architecture"],
      features: [
        "Kiến trúc mã nguồn chuẩn hóa dễ dàng mở rộng và bàn giao",
        "Bảo mật nhiều lớp: chuẩn bị câu lệnh truy vấn (Prepared Statements) chống SQL Injection",
        "Báo cáo và thống kê dữ liệu dưới dạng bảng biểu phân trang mượt mà",
        "Hoàn thành xuất sắc đồ án môn học với điểm số cao tại trường đại học"
      ],
      role: "Backend & Database Architect - Thiết kế lược đồ cơ sở dữ liệu và hiện thực hóa logic nghiệp vụ.",
      downloadUrl: "",
      communityUrl: "",
      demoUrl: "https://github.com/Tson28/web-project-final",
      githubUrl: "https://github.com/Tson28/web-project-final"
    },

    // ==================== NHÓM CLOUD & BACKEND ====================
    {
      id: "cloud-scaling",
      title: "Hạ Tầng API Microservices & Game Server Scaling",
      category: "cloud",
      categoryLabel: "☁️ Backend & Cloud",
      image: "assets/image/img5.png",
      shortDesc: "Cụm máy chủ backend hiệu năng cao viết bằng Python FastAPI và Docker, chuyên phục vụ lưu lượng truy cập lớn từ Game và Web.",
      fullDesc: "Kiến trúc hệ thống đám mây phân tán sẵn sàng xử lý hàng chục nghìn kết nối đồng thời. Ứng dụng cơ chế lập trình bất đồng bộ (Asynchronous) của FastAPI kết hợp Redis Cache giúp thời gian phản hồi đạt dưới 25ms, cùng kịch bản triển khai tự động Docker Compose trên AWS EC2.",
      techStack: ["Python", "FastAPI", "Docker", "PostgreSQL", "Redis", "AWS EC2"],
      features: [
        "Kiến trúc phân tầng sạch (Clean Architecture) dễ mở rộng quy mô cụm máy chủ",
        "Bộ nhớ đệm Redis Cache tối ưu hóa tốc độ tải bảng xếp hạng Leaderboard",
        "Tự động sinh tài liệu API chuẩn hóa Swagger UI để kết nối với Unity client",
        "Bảo mật nhiều tầng chống gian lận dữ liệu điểm số từ phía người chơi"
      ],
      role: "Backend & Cloud Engineer - Thiết kế kiến trúc máy chủ và cơ sở dữ liệu.",
      downloadUrl: "",
      communityUrl: "",
      demoUrl: "https://github.com/Tson28",
      githubUrl: "https://github.com/Tson28"
    }
  ];

  /* ------------------------------------------------------------------------
     2. RENDER KHO DỰ ÁN & GAME KÈM BỘ LỌC
     ------------------------------------------------------------------------ */
  const projectsGrid = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  function renderProjects(filter = "all") {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = "";

    const filtered = filter === "all" 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem; color: var(--text-secondary);">
          <i class="bx bx-folder" style="font-size: 3.5rem; color: var(--accent-cyan); margin-bottom: 0.8rem; display: block;"></i>
          <p>Hiện chưa có sản phẩm nào trong danh mục này. Kaito DEV đang tiếp tục phát triển!</p>
        </div>
      `;
      return;
    }

    filtered.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.setAttribute("data-id", project.id);

      const techPillsHtml = project.techStack
        .slice(0, 3)
        .map(tech => `<span class="tech-pill">${tech}</span>`)
        .join("");

      // Download button on card if available
      const downloadBtnHtml = project.downloadUrl 
        ? `<a href="${project.downloadUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-download" title="Tải Game / Source Code">
             <i class="bx bx-download"></i> Tải về
           </a>`
        : "";

      // Community icon if available
      const communityIconHtml = project.communityUrl
        ? `<a href="${project.communityUrl}" target="_blank" rel="noopener noreferrer" class="icon-link icon-link-discord" title="Cộng đồng Discord" aria-label="Discord">
             <i class="bx bxl-discord-alt"></i>
           </a>`
        : "";

      let badgeExtraClass = "";
      if (project.category === "game") badgeExtraClass = "badge-game";
      else if (project.category === "ai") badgeExtraClass = "badge-ai";

      card.innerHTML = `
        <div class="project-img-wrapper">
          <img src="${project.image}" alt="${project.title}" loading="lazy" />
          <span class="project-category-badge ${badgeExtraClass}">${project.categoryLabel}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.shortDesc}</p>
          <div class="project-tech-pills">
            <div class="tech-pill-group">
              ${techPillsHtml}
              ${project.techStack.length > 3 ? `<span class="tech-pill">+${project.techStack.length - 3}</span>` : ""}
            </div>
          </div>
          <div class="project-card-footer">
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              <button class="btn-detail view-project-btn" data-id="${project.id}">
                <i class="bx bx-info-circle"></i>
                <span>Xem chi tiết</span>
              </button>
              ${downloadBtnHtml}
            </div>
            <div class="project-icon-links">
              ${communityIconHtml}
              ${project.githubUrl ? `
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="icon-link" title="Xem mã nguồn GitHub" aria-label="GitHub">
                  <i class="bx bxl-github"></i>
                </a>` : ""
              }
              ${project.demoUrl ? `
                <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="icon-link" title="Live Demo / Chi tiết" aria-label="Demo">
                  <i class="bx bx-play-circle"></i>
                </a>` : ""
              }
            </div>
          </div>
        </div>
      `;

      projectsGrid.appendChild(card);
    });

    // Attach click listeners to "Xem chi tiết" buttons
    attachProjectModalTriggers();
  }

  // Filter click handler
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const selectedFilter = btn.getAttribute("data-filter");
      renderProjects(selectedFilter);
    });
  });

  // Initial render
  renderProjects("all");

  /* ------------------------------------------------------------------------
     3. MODAL POPUP CHI TIẾT DỰ ÁN & LINK TẢI / CỘNG ĐỒNG
     ------------------------------------------------------------------------ */
  const modal = document.getElementById("projectModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalProjectImg = document.getElementById("modalProjectImg");
  const modalCategoryBadge = document.getElementById("modalCategoryBadge");
  const modalProjectTitle = document.getElementById("modalProjectTitle");
  const modalProjectSubtitle = document.getElementById("modalProjectSubtitle");
  const modalHighlightActions = document.getElementById("modalHighlightActions");
  const modalTechPills = document.getElementById("modalTechPills");
  const modalDescription = document.getElementById("modalDescription");
  const modalFeaturesList = document.getElementById("modalFeaturesList");
  const modalRole = document.getElementById("modalRole");
  const modalLiveDemoBtn = document.getElementById("modalLiveDemoBtn");
  const modalGithubBtn = document.getElementById("modalGithubBtn");

  function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modal) return;

    modalProjectImg.src = project.image;
    modalProjectImg.alt = project.title;
    modalCategoryBadge.textContent = project.categoryLabel;
    modalProjectTitle.textContent = project.title;
    modalProjectSubtitle.textContent = project.shortDesc;

    // Highlight Action Buttons: Download & Community
    let highlightHtml = "";
    if (project.downloadUrl) {
      const isSrcNro = project.id === "game-nro";
      const btnDownloadText = isSrcNro 
        ? "Tải Trọn Bộ Source Code & Client NRO" 
        : (project.category === "game" ? "Tải Game Ngay (Bản Cài Đặt)" : "Tải Mã Nguồn / Bộ Cài");
      
      highlightHtml += `
        <a href="${project.downloadUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-download">
          <i class="bx bx-download"></i>
          <span>${btnDownloadText}</span>
        </a>
      `;
    }
    if (project.communityUrl) {
      highlightHtml += `
        <a href="${project.communityUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-discord-action">
          <i class="bx bxl-discord-alt"></i>
          <span>Gia Nhập Discord Cộng Đồng Game</span>
        </a>
      `;
    }
    modalHighlightActions.innerHTML = highlightHtml;

    // Tech stack pills
    modalTechPills.innerHTML = project.techStack
      .map(tech => `<span class="tech-pill"><i class="bx bx-check"></i> ${tech}</span>`)
      .join("");

    // Description & Role
    modalDescription.textContent = project.fullDesc;
    modalRole.textContent = project.role;

    // Features list
    modalFeaturesList.innerHTML = project.features
      .map(feat => `<li><i class="bx bx-check-circle"></i> <span>${feat}</span></li>`)
      .join("");

    // Links
    if (modalLiveDemoBtn) {
      modalLiveDemoBtn.href = project.demoUrl || "#";
      modalLiveDemoBtn.style.display = project.demoUrl ? "inline-flex" : "none";
    }
    if (modalGithubBtn) {
      modalGithubBtn.href = project.githubUrl || "#";
      modalGithubBtn.style.display = project.githubUrl ? "inline-flex" : "none";
    }

    // Show modal & disable background scroll
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function attachProjectModalTriggers() {
    const detailButtons = document.querySelectorAll(".view-project-btn");
    detailButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-id");
        openProjectModal(id);
      });
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeProjectModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeProjectModal();
    }
  });

  /* ------------------------------------------------------------------------
     4. HEADER SCROLL & MOBILE NAVBAR TOGGLE
     ------------------------------------------------------------------------ */
  const header = document.getElementById("header");
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Toggle mobile menu
  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("active");
      navbar.classList.toggle("active");
    });
  }

  // Close mobile menu on clicking any link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (menuIcon) menuIcon.classList.remove("active");
      if (navbar) navbar.classList.remove("active");
    });
  });

  // Sticky header & Scroll spy
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Sticky header
    if (header) {
      if (scrollY > 60) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    // Scroll spy for active navbar item
    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop - 140;
      const secId = sec.getAttribute("id");

      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          const targetLink = document.querySelector(`.navbar a[href*="${secId}"]`);
          if (targetLink) targetLink.classList.add("active");
        });
      }
    });
  });

  /* ------------------------------------------------------------------------
     5. TYPED.JS HIỆU ỨNG GÕ CHỮ TIẾNG VIỆT CHO KAITO DEV
     ------------------------------------------------------------------------ */
  if (typeof Typed !== "undefined" && document.querySelector(".multiple-text")) {
    new Typed(".multiple-text", {
      strings: [
        "Lập trình viên Game & Share Source NRO",
        "Kỹ sư Trí Tuệ Nhân Tạo (AI & Machine Learning)",
        "Lập trình viên Web Full-Stack & WebGL",
        "Kỹ sư Ứng dụng Di động (Flutter)",
        "Xây dựng Game Server & Cloud Infrastructure"
      ],
      typeSpeed: 65,
      backSpeed: 40,
      backDelay: 1600,
      loop: true
    });
  }

  /* ------------------------------------------------------------------------
     6. SCROLL REVEAL HIỆU ỨNG XUẤT HIỆN KHI CUỘN
     ------------------------------------------------------------------------ */
  if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
      origin: "top",
      distance: "40px",
      duration: 1000,
      delay: 150,
      reset: false
    });

    sr.reveal(".section-title-wrapper, .hero-greeting, .hero-name, .hero-subtitle", {});
    sr.reveal(".hero-description, .social-media, .hero-actions, .hero-stats", { delay: 250, origin: "bottom" });
    sr.reveal(".home-img-wrapper, .about-img-box", { origin: "left", delay: 200 });
    sr.reveal(".about-content", { origin: "right", delay: 200 });
    sr.reveal(".skill-category-card, .services-box, .community-card", { interval: 100, origin: "bottom" });
    sr.reveal(".contact-card, .contact-form-wrapper", { interval: 120, origin: "bottom" });
  }

  /* ------------------------------------------------------------------------
     7. TƯƠNG TÁC FORM LIÊN HỆ
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const formToast = document.getElementById("formToast");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <i class="bx bx-loader-alt bx-spin"></i>
          <span>Đang gửi tin nhắn đến Kaito...</span>
        `;
      }

      // Simulate sending via network
      setTimeout(() => {
        if (formToast) {
          formToast.classList.add("show");
          setTimeout(() => {
            formToast.classList.remove("show");
          }, 6000);
        }

        contactForm.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span>Gửi tin nhắn đến Kaito</span>
            <i class="bx bx-paper-plane"></i>
          `;
        }
      }, 900);
    });
  }
});
