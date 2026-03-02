<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تعلّم.ما - نظام التعليقات التفاعلي</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        *{margin:0;padding:0;box-sizing:border-box}body{font-family:'Cairo',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#333;min-height:100vh}.navbar{background:rgba(30,60,114,0.95);backdrop-filter:blur(10px);color:#fff;padding:1rem 5%;position:sticky;top:0;z-index:1000;box-shadow:0 4px 12px rgba(0,0,0,0.1)}.nav-container{display:flex;justify-content:space-between;align-items:center;max-width:1400px;margin:0 auto}.logo{font-size:2rem;font-weight:800;background:linear-gradient(135deg,#fff,#ffd700);-webkit-background-clip:text;-webkit-text-fill-color:transparent;cursor:pointer}.nav-menu{display:flex;gap:1rem;align-items:center}.nav-btn{background:transparent;border:2px solid rgba(255,255,255,0.2);color:#fff;padding:0.6rem 1.5rem;border-radius:50px;cursor:pointer;transition:all 0.3s ease}.nav-btn:hover{background:#fff;color:#1e3c72;transform:translateY(-2px)}.user-badge{background:rgba(255,255,255,0.1);padding:0.5rem 1.5rem;border-radius:50px;color:#fff;display:flex;align-items:center;gap:0.5rem}.dashboard{max-width:1400px;margin:2rem auto;padding:0 2rem}.welcome-card{background:linear-gradient(135deg,#1e3c72,#0f2b4f);color:#fff;padding:2rem;border-radius:15px;margin-bottom:2rem;position:relative;overflow:hidden}.welcome-card::before{content:'📚';position:absolute;font-size:8rem;opacity:0.1;left:-20px;bottom:-20px;transform:rotate(-15deg)}.welcome-title{font-size:2rem;margin-bottom:1rem}.welcome-stats{display:flex;gap:2rem;flex-wrap:wrap}.welcome-stat{display:flex;align-items:center;gap:0.5rem;background:rgba(255,255,255,0.1);padding:0.5rem 1rem;border-radius:50px}.stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-bottom:2rem}.stat-card{background:#fff;padding:1.5rem;border-radius:15px;box-shadow:0 4px 12px rgba(0,0,0,0.1);display:flex;align-items:center;gap:1rem;transition:all 0.3s ease}.stat-card:hover{transform:translateY(-5px);box-shadow:0 8px 24px rgba(0,0,0,0.15)}.stat-icon{width:50px;height:50px;background:#1e3c72;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.5rem}.stat-value{font-size:2rem;font-weight:800;color:#1e3c72;line-height:1}.teachers-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:2rem}.teacher-card{background:#fff;border-radius:15px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.1);transition:all 0.3s ease;cursor:pointer}.teacher-card:hover{transform:translateY(-5px);box-shadow:0 8px 24px rgba(0,0,0,0.15)}.teacher-header{height:80px;background:linear-gradient(135deg,#1e3c72,#2a5298)}.teacher-avatar{width:100px;height:100px;background:#fff;border-radius:50%;margin:-50px auto 0;display:flex;align-items:center;justify-content:center;font-size:3rem;border:4px solid #fff}.teacher-info{padding:1.5rem;text-align:center}.teacher-name{font-size:1.5rem;color:#1e3c72}.teacher-specialty{color:#e6b800;margin:0.5rem 0}.teacher-bio{color:#666;font-size:0.9rem;margin-bottom:1rem}.teacher-stats{display:flex;justify-content:center;gap:1rem;margin:1rem 0}.stat-badge{background:#f8f9fa;padding:0.3rem 1rem;border-radius:50px;font-size:0.9rem;display:flex;align-items:center;gap:0.3rem}.follow-btn{width:100%;padding:0.8rem;border:none;border-radius:50px;background:#1e3c72;color:#fff;font-weight:600;cursor:pointer;transition:all 0.3s ease;margin-top:1rem}.follow-btn.following{background:#28a745}.student-tabs{display:flex;gap:1rem;margin:2rem 0;flex-wrap:wrap}.tab-btn{padding:0.8rem 2rem;border:none;background:rgba(255,255,255,0.1);color:#fff;border-radius:50px;cursor:pointer;font-size:1rem;font-weight:600;transition:all 0.3s ease}.tab-btn:hover,.tab-btn.active{background:#ffd700;color:#1e3c72}.modal{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:2000;justify-content:center;align-items:center}.modal-content{background:#fff;width:90%;max-width:600px;max-height:80vh;overflow-y:auto;padding:2rem;border-radius:15px;position:relative;animation:modalZoom 0.3s ease}@keyframes modalZoom{from{transform:scale(0.8);opacity:0}to{transform:scale(1);opacity:1}}.modal-close{position:absolute;left:1rem;top:1rem;font-size:1.5rem;cursor:pointer;width:30px;height:30px;background:#f8f9fa;border-radius:50%;display:flex;align-items:center;justify-content:center}.modal-close:hover{background:#dc3545;color:#fff}.form-group{margin-bottom:1rem}.form-group input,.form-group select,.form-group textarea{width:100%;padding:0.8rem;border:2px solid #e9ecef;border-radius:5px;font-family:'Cairo',sans-serif}.submit-btn{width:100%;padding:1rem;background:#1e3c72;color:#fff;border:none;border-radius:5px;cursor:pointer;font-size:1.1rem;transition:all 0.3s ease}.submit-btn:hover{background:#2a5298;transform:translateY(-2px)}.user-type-selector{display:flex;gap:1rem;margin:1rem 0}.user-type-btn{flex:1;padding:1rem;border:2px solid #1e3c72;background:transparent;color:#1e3c72;border-radius:50px;cursor:pointer;font-weight:600;transition:all 0.3s ease}.user-type-btn:hover{background:rgba(30,60,114,0.1)}.user-type-btn.active{background:#1e3c72;color:#fff}.toast{position:fixed;bottom:20px;right:20px;background:#fff;padding:1rem 2rem;border-radius:50px;box-shadow:0 4px 12px rgba(0,0,0,0.1);border-right:4px solid #28a745;z-index:3000;animation:slideIn 0.3s ease}@keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}.toast.error{border-right-color:#dc3545}.lessons-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.5rem;margin-top:1rem}.lesson-card{background:#fff;border-radius:15px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.1);transition:all 0.3s ease}.lesson-card:hover{transform:translateY(-5px);box-shadow:0 8px 24px rgba(0,0,0,0.15)}.lesson-header{height:120px;background:linear-gradient(135deg,#1e3c72,#2a5298);display:flex;align-items:center;justify-content:center;font-size:3rem;color:#fff}.lesson-content{padding:1.5rem}.lesson-title{font-size:1.2rem;color:#1e3c72;margin-bottom:0.5rem}.lesson-meta{display:flex;gap:1rem;color:#666;font-size:0.9rem;margin:0.5rem 0}.lesson-actions{display:flex;gap:0.5rem;margin-top:1rem}.lesson-btn{flex:1;padding:0.5rem;border:none;border-radius:5px;cursor:pointer;font-weight:600}.view-btn{background:#1e3c72;color:#fff}.save-btn{background:#ffd700;color:#1e3c72}.save-btn.saved{background:#28a745;color:#fff}.comments-section{margin-top:2rem;border-top:2px solid #e9ecef;padding-top:1.5rem}.comments-title{font-size:1.3rem;color:#1e3c72;margin-bottom:1rem;display:flex;align-items:center;gap:0.5rem}.comment{background:#f8f9fa;border-radius:10px;padding:1rem;margin-bottom:1rem;border-right:3px solid #1e3c72}.comment-header{display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem}.comment-avatar{width:30px;height:30px;background:#1e3c72;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:1rem}.comment-author{font-weight:600;color:#1e3c72}.comment-date{color:#666;font-size:0.8rem;margin-right:auto}.comment-text{color:#333;line-height:1.6;margin-bottom:0.5rem}.comment-actions{display:flex;gap:1rem;color:#666;font-size:0.9rem}.comment-actions span{cursor:pointer;display:flex;align-items:center;gap:0.3rem;transition:all 0.2s ease}.comment-actions span:hover{color:#1e3c72}.comment-actions .liked{color:#e63946}.add-comment{background:#f8f9fa;border-radius:10px;padding:1rem;margin-top:1rem}.add-comment textarea{width:100%;padding:0.8rem;border:2px solid #e9ecef;border-radius:5px;margin-bottom:0.5rem;resize:vertical}.add-comment button{background:#1e3c72;color:#fff;border:none;padding:0.6rem 1.5rem;border-radius:5px;cursor:pointer;transition:all 0.3s ease}.add-comment button:hover{background:#2a5298;transform:translateY(-2px)}.channel-page{background:#fff;border-radius:15px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.1)}.channel-cover{height:200px;background:linear-gradient(135deg,#1e3c72,#2a5298);position:relative}.channel-avatar-large{width:120px;height:120px;background:#fff;border-radius:50%;position:absolute;bottom:-60px;right:30px;display:flex;align-items:center;justify-content:center;font-size:4rem;border:4px solid #ffd700}.channel-info{padding:4rem 2rem 2rem}.channel-name{font-size:2rem;color:#1e3c72}.channel-meta{display:flex;gap:2rem;margin:1rem 0}.channel-actions{display:flex;gap:1rem;margin-top:1rem}@media (max-width:768px){.nav-container{flex-direction:column;gap:1rem}.student-tabs{flex-direction:column}.tab-btn{width:100%}.teachers-grid{grid-template-columns:1fr}.channel-avatar-large{right:50%;transform:translateX(50%)}.channel-info{text-align:center}.channel-meta{justify-content:center}.channel-actions{flex-direction:column}}
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo" onclick="window.location.reload()">تعلّم<span>.ما</span></div>
            <div class="nav-menu" id="navMenu"></div>
        </div>
    </nav>

    <div class="dashboard" id="dashboard"></div>

    <div class="modal" id="modal">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal()">&times;</span>
            <div id="modalContent"></div>
        </div>
    </div>

    <script>
        // ========== 10 أساتذة تجريبيين ==========
        const teachers = [
            { id: 1, name: 'أحمد الفاسي', email: 'ahmed@teacher.com', password: '123456', specialty: 'الرياضيات', bio: 'أستاذ الرياضيات - 15 سنة خبرة', avatar: '📐', rating: 4.8, followers: [], lessons: 24 },
            { id: 2, name: 'فاطمة المراكشي', email: 'fatima@teacher.com', password: '123456', specialty: 'الفيزياء', bio: 'دكتورة في الفيزياء النووية', avatar: '⚡', rating: 4.9, followers: [], lessons: 18 },
            { id: 3, name: 'محمد البيضاوي', email: 'mohamed@teacher.com', password: '123456', specialty: 'العربية', bio: 'أستاذ اللغة العربية', avatar: '📝', rating: 4.7, followers: [], lessons: 31 },
            { id: 4, name: 'سعاد المغربية', email: 'souad@teacher.com', password: '123456', specialty: 'الفلسفة', bio: 'أستاذة الفلسفة', avatar: '📚', rating: 4.6, followers: [], lessons: 15 },
            { id: 5, name: 'عمر السوسي', email: 'omar@teacher.com', password: '123456', specialty: 'الإنجليزية', bio: 'خبير في اللغة الإنجليزية', avatar: '🇬🇧', rating: 4.9, followers: [], lessons: 27 },
            { id: 6, name: 'خديجة الصنهاجي', email: 'khadija@teacher.com', password: '123456', specialty: 'الفرنسية', bio: 'أستاذة الفرنسية', avatar: '🇫🇷', rating: 4.8, followers: [], lessons: 22 },
            { id: 7, name: 'حسن الأمازيغي', email: 'hassan@teacher.com', password: '123456', specialty: 'التاريخ', bio: 'مؤرخ وباحث', avatar: '🏛️', rating: 4.7, followers: [], lessons: 19 },
            { id: 8, name: 'نبيل السلاوي', email: 'nabil@teacher.com', password: '123456', specialty: 'الجغرافيا', bio: 'متخصص في الجغرافيا', avatar: '🌍', rating: 4.6, followers: [], lessons: 16 },
            { id: 9, name: 'إيمان البيضاء', email: 'iman@teacher.com', password: '123456', specialty: 'علوم الحياة', bio: 'دكتورة في البيولوجيا', avatar: '🧬', rating: 4.9, followers: [], lessons: 28 },
            { id: 10, name: 'عبد الله فاسي', email: 'abdellah@teacher.com', password: '123456', specialty: 'الكيمياء', bio: 'أستاذ الكيمياء', avatar: '🧪', rating: 4.8, followers: [], lessons: 23 }
        ];

        // ========== دروس تجريبية ==========
        const lessons = [
            { id: 101, title: 'المعادلات من الدرجة الأولى', teacherId: 1, teacherName: 'أحمد الفاسي', level: 'bac1', views: 234, downloads: 56 },
            { id: 102, title: 'قوانين نيوتن', teacherId: 2, teacherName: 'فاطمة المراكشي', level: 'bac2', views: 189, downloads: 43 },
            { id: 103, title: 'قواعد اللغة العربية', teacherId: 3, teacherName: 'محمد البيضاوي', level: 'bac1', views: 312, downloads: 78 },
            { id: 104, title: 'الفلسفة الإسلامية', teacherId: 4, teacherName: 'سعاد المغربية', level: 'bac2', views: 156, downloads: 34 },
            { id: 105, title: 'قواعد اللغة الإنجليزية', teacherId: 5, teacherName: 'عمر السوسي', level: 'bac1', views: 278, downloads: 67 }
        ];

        // ========== نظام التعليقات ==========
        let comments = JSON.parse(localStorage.getItem('comments')) || [
            { id: 1001, lessonId: 101, userId: 1, userName: 'يوسف الطالبي', userAvatar: '👨‍🎓', text: 'شرح رائع جداً استفدت كثيراً', date: '2024-03-01', likes: 12, likedBy: [] },
            { id: 1002, lessonId: 101, userId: 2, userName: 'سارة العلمي', userAvatar: '👩‍🎓', text: 'الله يعطيك العافية', date: '2024-03-01', likes: 8, likedBy: [] },
            { id: 1003, lessonId: 102, userId: 1, userName: 'يوسف الطالبي', userAvatar: '👨‍🎓', text: 'تجارب رائعة شكراً جزيلاً', date: '2024-03-02', likes: 15, likedBy: [] },
            { id: 1004, lessonId: 103, userId: 2, userName: 'سارة العلمي', userAvatar: '👩‍🎓', text: 'أسلوب ممتع في الشرح', date: '2024-03-02', likes: 9, likedBy: [] },
            { id: 1005, lessonId: 104, userId: 1, userName: 'يوسف الطالبي', userAvatar: '👨‍🎓', text: 'أفكار عميقة شكراً', date: '2024-03-03', likes: 7, likedBy: [] }
        ];

        const students = [
            { id: 1, name: 'يوسف الطالبي', email: 'youssef@student.com', password: '123456', level: 'bac2', following: [], savedLessons: [], points: 150, streak: 5 },
            { id: 2, name: 'سارة العلمي', email: 'sara@student.com', password: '123456', level: 'bac1', following: [], savedLessons: [], points: 80, streak: 3 }
        ];

        let currentUser = null;
        let selectedUserType = 'student';
        let viewingChannel = null;
        let currentLesson = null;

        // ========== دوال مساعدة ==========
        function showToast(message, type = 'success') {
            const toast = document.createElement('div');
            toast.className = `toast ${type === 'error' ? 'error' : ''}`;
            toast.textContent = message;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
        }

        function showModal(content) {
            document.getElementById('modalContent').innerHTML = content;
            document.getElementById('modal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }

        function getLevelName(level) {
            const levels = { 'bac1': 'الأولى باكالوريا', 'bac2': 'الثانية باكالوريا' };
            return levels[level] || level;
        }

        function saveComments() {
            localStorage.setItem('comments', JSON.stringify(comments));
        }

        function renderUI() {
            const navMenu = document.getElementById('navMenu');
            
            if (currentUser) {
                navMenu.innerHTML = `
                    <span class="user-badge">👋 ${currentUser.name}</span>
                    <button class="nav-btn" onclick="logout()">خروج</button>
                `;
                
                if (viewingChannel) {
                    renderChannelPage(viewingChannel);
                } else if (currentLesson) {
                    renderLessonPage(currentLesson);
                } else if (currentUser.type === 'teacher') {
                    renderTeacherDashboard();
                } else {
                    renderStudentDashboard();
                }
            } else {
                navMenu.innerHTML = `<button class="nav-btn" onclick="showAuthModal()">دخول</button>`;
                showAuthModal();
            }
        }

        function renderStudentDashboard() {
            const student = students.find(s => s.id === currentUser.id);
            
            document.getElementById('dashboard').innerHTML = `
                <div class="welcome-card">
                    <h1 class="welcome-title">مرحباً بك ${student.name} 👋</h1>
                    <div class="welcome-stats">
                        <div class="welcome-stat"><i class="fas fa-fire"></i> ${student.streak} يوم</div>
                        <div class="welcome-stat"><i class="fas fa-star"></i> ${student.points} نقطة</div>
                        <div class="welcome-stat"><i class="fas fa-graduation-cap"></i> ${getLevelName(student.level)}</div>
                    </div>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-chalkboard-teacher"></i></div>
                        <div><div class="stat-value">${teachers.length}</div><div>أستاذ</div></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-heart"></i></div>
                        <div><div class="stat-value">${student.following?.length || 0}</div><div>متابعة</div></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-book"></i></div>
                        <div><div class="stat-value">${lessons.length}</div><div>درس</div></div>
                    </div>
                </div>
                
                <div class="student-tabs">
                    <button class="tab-btn active" onclick="showStudentTab('teachers')">جميع الأساتذة (${teachers.length})</button>
                    <button class="tab-btn" onclick="showStudentTab('following')">أساتذتي (${student.following?.length || 0})</button>
                    <button class="tab-btn" onclick="showStudentTab('lessons')">الدروس (${lessons.length})</button>
                </div>
                
                <div id="studentContent">
                    ${renderAllTeachers()}
                </div>
            `;
        }

        function renderAllTeachers() {
            const student = students.find(s => s.id === currentUser?.id);
            
            return `
                <div class="teachers-grid">
                    ${teachers.map(teacher => {
                        const isFollowing = student?.following?.includes(teacher.id);
                        const teacherLessons = lessons.filter(l => l.teacherId === teacher.id).length;
                        return `
                            <div class="teacher-card" onclick="viewTeacherChannel(${teacher.id})">
                                <div class="teacher-header"></div>
                                <div class="teacher-avatar">${teacher.avatar}</div>
                                <div class="teacher-info">
                                    <h3 class="teacher-name">${teacher.name}</h3>
                                    <p class="teacher-specialty">${teacher.specialty}</p>
                                    <p class="teacher-bio">${teacher.bio}</p>
                                    <div class="teacher-stats">
                                        <span class="stat-badge"><i class="fas fa-star"></i> ${teacher.rating}</span>
                                        <span class="stat-badge"><i class="fas fa-book"></i> ${teacherLessons}</span>
                                    </div>
                                    <button class="follow-btn ${isFollowing ? 'following' : ''}" 
                                        onclick="event.stopPropagation(); toggleFollow(${teacher.id})">
                                        ${isFollowing ? '✓ متابعة' : '+ متابعة'}
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        }

        function renderFollowingTeachers() {
            const student = students.find(s => s.id === currentUser.id);
            const followingTeachers = teachers.filter(t => student.following?.includes(t.id));
            
            if (followingTeachers.length === 0) {
                return '<p style="color: white; text-align: center;">لم تتابع أي أستاذ بعد</p>';
            }
            
            return `
                <div class="teachers-grid">
                    ${followingTeachers.map(teacher => `
                        <div class="teacher-card" onclick="viewTeacherChannel(${teacher.id})">
                            <div class="teacher-header"></div>
                            <div class="teacher-avatar">${teacher.avatar}</div>
                            <div class="teacher-info">
                                <h3 class="teacher-name">${teacher.name}</h3>
                                <p class="teacher-specialty">${teacher.specialty}</p>
                                <button class="follow-btn following" onclick="event.stopPropagation(); toggleFollow(${teacher.id})">
                                    ✓ متابعة
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        function renderAllLessons() {
            const student = students.find(s => s.id === currentUser?.id);
            
            return `
                <div class="lessons-grid">
                    ${lessons.map(lesson => {
                        const teacher = teachers.find(t => t.id === lesson.teacherId);
                        const isSaved = student?.savedLessons?.includes(lesson.id);
                        const lessonComments = comments.filter(c => c.lessonId === lesson.id).length;
                        return `
                            <div class="lesson-card" onclick="viewLesson(${lesson.id})">
                                <div class="lesson-header">📄</div>
                                <div class="lesson-content">
                                    <h3 class="lesson-title">${lesson.title}</h3>
                                    <p class="teacher-specialty">${teacher?.name}</p>
                                    <div class="lesson-meta">
                                        <span><i class="fas fa-layer-group"></i> ${getLevelName(lesson.level)}</span>
                                        <span><i class="fas fa-eye"></i> ${lesson.views}</span>
                                        <span><i class="fas fa-comment"></i> ${lessonComments}</span>
                                    </div>
                                    <div class="lesson-actions">
                                        <button class="lesson-btn view-btn" onclick="event.stopPropagation(); viewLesson(${lesson.id})"><i class="fas fa-eye"></i> عرض</button>
                                        <button class="lesson-btn save-btn ${isSaved ? 'saved' : ''}" 
                                            onclick="event.stopPropagation(); toggleSaveLesson(${lesson.id})">
                                            <i class="fas ${isSaved ? 'fa-check' : 'fa-bookmark'}"></i> ${isSaved ? 'محفوظ' : 'حفظ'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        }

        function showStudentTab(tab) {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            event.target.classList.add('active');
            
            let content = '';
            if (tab === 'teachers') content = renderAllTeachers();
            else if (tab === 'following') content = renderFollowingTeachers();
            else content = renderAllLessons();
            
            document.getElementById('studentContent').innerHTML = content;
        }

        function toggleFollow(teacherId) {
            const student = students.find(s => s.id === currentUser.id);
            const teacher = teachers.find(t => t.id === teacherId);
            
            if (!student.following) student.following = [];
            
            if (student.following.includes(teacherId)) {
                student.following = student.following.filter(id => id !== teacherId);
                teacher.followers = teacher.followers?.filter(id => id !== student.id) || [];
                showToast('تم إلغاء المتابعة', 'info');
            } else {
                student.following.push(teacherId);
                if (!teacher.followers) teacher.followers = [];
                teacher.followers.push(student.id);
                student.points += 10;
                showToast('تمت المتابعة +10 نقاط');
            }
            
            const activeTab = document.querySelector('.tab-btn.active')?.textContent || '';
            if (activeTab.includes('أساتذتي')) {
                showStudentTab('following');
            } else {
                renderStudentDashboard();
            }
        }

        function toggleSaveLesson(lessonId) {
            const student = students.find(s => s.id === currentUser.id);
            if (!student.savedLessons) student.savedLessons = [];
            
            if (student.savedLessons.includes(lessonId)) {
                student.savedLessons = student.savedLessons.filter(id => id !== lessonId);
                showToast('تم إزالة الدرس', 'info');
            } else {
                student.savedLessons.push(lessonId);
                student.points += 5;
                showToast('تم حفظ الدرس +5 نقاط');
            }
            
            const activeTab = document.querySelector('.tab-btn.active')?.textContent || '';
            if (activeTab.includes('الدروس')) {
                showStudentTab('lessons');
            }
        }

        // ========== نظام التعليقات ==========
        function viewLesson(lessonId) {
            currentLesson = lessonId;
            const lesson = lessons.find(l => l.id === lessonId);
            const teacher = teachers.find(t => t.id === lesson.teacherId);
            const lessonComments = comments.filter(c => c.lessonId === lessonId);
            
            lesson.views += 1;
            
            document.getElementById('dashboard').innerHTML = `
                <div style="background: white; border-radius: 15px; padding: 2rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <h1 style="color: #1e3c72;">${lesson.title}</h1>
                        <button class="nav-btn" onclick="goHome()">رجوع</button>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 2rem;">
                        <p><strong>الأستاذ:</strong> ${teacher?.name}</p>
                        <p><strong>المادة:</strong> ${teacher?.specialty}</p>
                        <p><strong>المستوى:</strong> ${getLevelName(lesson.level)}</p>
                        <p><strong>المشاهدات:</strong> ${lesson.views}</p>
                        <p><strong>التحميلات:</strong> ${lesson.downloads}</p>
                    </div>
                    
                    <div class="comments-section">
                        <h3 class="comments-title">
                            <i class="fas fa-comments"></i> 
                            التعليقات (${lessonComments.length})
                        </h3>
                        
                        <div id="commentsList">
                            ${renderComments(lessonComments)}
                        </div>
                        
                        ${currentUser ? `
                            <div class="add-comment">
                                <textarea id="commentText" rows="3" placeholder="اكتب تعليقك..."></textarea>
                                <button onclick="addComment(${lessonId})">إضافة تعليق</button>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        function renderComments(comments) {
            if (comments.length === 0) {
                return '<p style="color: #666; text-align: center;">لا توجد تعليقات بعد. كن أول من يعلق!</p>';
            }
            
            return comments.sort((a, b) => new Date(b.date) - new Date(a.date)).map(comment => `
                <div class="comment" id="comment-${comment.id}">
                    <div class="comment-header">
                        <div class="comment-avatar">${comment.userAvatar}</div>
                        <span class="comment-author">${comment.userName}</span>
                        <span class="comment-date">${comment.date}</span>
                    </div>
                    <div class="comment-text">${comment.text}</div>
                    <div class="comment-actions">
                        <span onclick="likeComment(${comment.id})">
                            <i class="fas fa-heart ${comment.likedBy?.includes(currentUser?.id) ? 'liked' : ''}"></i> 
                            ${comment.likes}
                        </span>
                        <span onclick="replyToComment(${comment.id})">
                            <i class="fas fa-reply"></i> رد
                        </span>
                    </div>
                </div>
            `).join('');
        }

        function addComment(lessonId) {
            const text = document.getElementById('commentText').value;
            if (!text.trim()) {
                showToast('الرجاء كتابة تعليق', 'error');
                return;
            }
            
            const user = currentUser.type === 'student' 
                ? students.find(s => s.id === currentUser.id)
                : teachers.find(t => t.id === currentUser.id);
            
            const newComment = {
                id: Date.now(),
                lessonId: lessonId,
                userId: currentUser.id,
                userName: user.name,
                userAvatar: user.avatar || '👨‍🎓',
                text: text,
                date: new Date().toISOString().split('T')[0],
                likes: 0,
                likedBy: []
            };
            
            comments.push(newComment);
            saveComments();
            
            // منح نقاط للتلميذ
            if (currentUser.type === 'student') {
                const student = students.find(s => s.id === currentUser.id);
                student.points += 2;
                showToast('تم إضافة تعليقك +2 نقاط');
            }
            
            viewLesson(lessonId);
        }

        function likeComment(commentId) {
            if (!currentUser) {
                showToast('الرجاء تسجيل الدخول أولاً', 'error');
                return;
            }
            
            const comment = comments.find(c => c.id === commentId);
            if (!comment) return;
            
            if (!comment.likedBy) comment.likedBy = [];
            
            if (comment.likedBy.includes(currentUser.id)) {
                comment.likedBy = comment.likedBy.filter(id => id !== currentUser.id);
                comment.likes -= 1;
                showToast('تم إلغاء الإعجاب');
            } else {
                comment.likedBy.push(currentUser.id);
                comment.likes += 1;
                showToast('تم الإعجاب بالتعليق');
            }
            
            saveComments();
            viewLesson(comment.lessonId);
        }

        function replyToComment(commentId) {
            showModal(`
                <h2 style="color: #1e3c72;">الرد على التعليق</h2>
                <div class="form-group">
                    <textarea id="replyText" rows="3" placeholder="اكتب ردك..."></textarea>
                </div>
                <button class="submit-btn" onclick="submitReply(${commentId})">إرسال الرد</button>
            `);
        }

        function submitReply(commentId) {
            const text = document.getElementById('replyText').value;
            if (!text.trim()) {
                showToast('الرجاء كتابة الرد', 'error');
                return;
            }
            
            showToast('سيتم إضافة الرد قريباً');
            closeModal();
        }

        function viewTeacherChannel(teacherId) {
            viewingChannel = teacherId;
            const teacher = teachers.find(t => t.id === teacherId);
            const student = students.find(s => s.id === currentUser?.id);
            const isFollowing = student?.following?.includes(teacherId) || false;
            const teacherLessons = lessons.filter(l => l.teacherId === teacherId);
            
            document.getElementById('dashboard').innerHTML = `
                <div style="background: white; border-radius: 15px; padding: 2rem;">
                    <div style="display: flex; gap: 2rem; align-items: center;">
                        <div style="font-size: 5rem;">${teacher.avatar}</div>
                        <div>
                            <h1>${teacher.name}</h1>
                            <p style="color: #e6b800;">${teacher.specialty}</p>
                            <p>${teacher.bio}</p>
                            <p>👥 ${teacher.followers?.length || 0} متابع</p>
                            <p>⭐ ${teacher.rating}</p>
                            <p>📚 ${teacherLessons.length} درس</p>
                            ${currentUser?.type === 'student' ? `
                                <button class="nav-btn" style="background: #1e3c72; color: white; margin-left: 1rem;" 
                                    onclick="toggleFollow(${teacher.id})">
                                    ${isFollowing ? '✓ متابعة' : '+ متابعة'}
                                </button>
                            ` : ''}
                            <button class="nav-btn" onclick="goHome()">رجوع</button>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderTeacherDashboard() {
            const teacher = teachers.find(t => t.id === currentUser.id);
            
            document.getElementById('dashboard').innerHTML = `
                <div class="welcome-card">
                    <h1 class="welcome-title">مرحباً بك أ. ${teacher.name} 👨‍🏫</h1>
                    <p>${teacher.bio}</p>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-users"></i></div>
                        <div><div class="stat-value">${teacher.followers?.length || 0}</div><div>متابع</div></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-star"></i></div>
                        <div><div class="stat-value">${teacher.rating}</div><div>تقييم</div></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-book"></i></div>
                        <div><div class="stat-value">${lessons.filter(l => l.teacherId === teacher.id).length}</div><div>درس</div></div>
                    </div>
                </div>
            `;
        }

        function showAuthModal() {
            showModal(`
                <h2 style="color: #1e3c72; text-align: center;">مرحباً بك</h2>
                <div class="user-type-selector">
                    <button class="user-type-btn ${selectedUserType === 'student' ? 'active' : ''}" onclick="selectUserType('student')">تلميذ</button>
                    <button class="user-type-btn ${selectedUserType === 'teacher' ? 'active' : ''}" onclick="selectUserType('teacher')">أستاذ</button>
                </div>
                <div class="form-group">
                    <input type="email" id="loginEmail" placeholder="البريد الإلكتروني" value="${selectedUserType === 'teacher' ? 'ahmed@teacher.com' : 'youssef@student.com'}">
                </div>
                <div class="form-group">
                    <input type="password" id="loginPassword" placeholder="كلمة السر" value="123456">
                </div>
                <button class="submit-btn" onclick="handleLogin()">دخول</button>
                <p style="text-align: center; margin-top: 1rem;">
                    <a href="#" onclick="showRegisterForm()">تسجيل جديد</a>
                </p>
            `);
        }

        function showRegisterForm() {
            showModal(`
                <h2 style="color: #1e3c72; text-align: center;">تسجيل جديد</h2>
                <div class="form-group">
                    <input type="text" id="regName" placeholder="الاسم الكامل">
                </div>
                <div class="form-group">
                    <input type="email" id="regEmail" placeholder="البريد الإلكتروني">
                </div>
                <div class="form-group">
                    <input type="password" id="regPassword" placeholder="كلمة السر">
                </div>
                ${selectedUserType === 'teacher' ? `
                    <div class="form-group">
                        <input type="text" id="regSpecialty" placeholder="الاختصاص">
                    </div>
                ` : ''}
                <button class="submit-btn" onclick="handleRegister()">تسجيل</button>
                <p style="text-align: center; margin-top: 1rem;">
                    <a href="#" onclick="showAuthModal()">لديك حساب؟</a>
                </p>
            `);
        }

        function selectUserType(type) {
            selectedUserType = type;
            showAuthModal();
        }

        function handleLogin() {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            let user;
            if (selectedUserType === 'teacher') {
                user = teachers.find(t => t.email === email && t.password === password);
            } else {
                user = students.find(s => s.email === email && s.password === password);
            }

            if (user) {
                currentUser = { id: user.id, name: user.name, type: selectedUserType };
                closeModal();
                renderUI();
                showToast('مرحباً بك');
            } else {
                showToast('خطأ في البريد أو كلمة السر', 'error');
            }
        }

        function handleRegister() {
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;

            if (!name || !email || !password) {
                showToast('الرجاء ملء جميع الحقول', 'error');
                return;
            }

            if (selectedUserType === 'teacher') {
                if (teachers.find(t => t.email === email)) {
                    showToast('البريد موجود مسبقاً', 'error');
                    return;
                }

                const newTeacher = {
                    id: teachers.length + 1,
                    name, email, password,
                    specialty: document.getElementById('regSpecialty')?.value || 'أستاذ',
                    bio: 'أستاذ جديد',
                    avatar: ['👨‍🏫', '👩‍🏫', '📚', '🔬'][Math.floor(Math.random() * 4)],
                    rating: 0,
                    followers: []
                };

                teachers.push(newTeacher);
                currentUser = { id: newTeacher.id, name, type: 'teacher' };

            } else {
                if (students.find(s => s.email === email)) {
                    showToast('البريد موجود مسبقاً', 'error');
                    return;
                }

                const newStudent = {
                    id: students.length + 1,
                    name, email, password,
                    level: 'bac1',
                    following: [],
                    savedLessons: [],
                    points: 0,
                    streak: 0
                };

                students.push(newStudent);
                currentUser = { id: newStudent.id, name, type: 'student' };
            }

            closeModal();
            renderUI();
            showToast('تم التسجيل بنجاح');
        }

        function logout() {
            currentUser = null;
            viewingChannel = null;
            currentLesson = null;
            renderUI();
            showToast('تم تسجيل الخروج');
        }

        function goHome() {
            viewingChannel = null;
            currentLesson = null;
            renderUI();
        }

        renderUI();

        window.onclick = function(event) {
            const modal = document.getElementById('modal');
            if (event.target === modal) closeModal();
        };
    </script>
</body>
</html>