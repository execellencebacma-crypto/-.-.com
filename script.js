<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تعلّم.ما - منصة الأساتذة والتلاميذ</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        *{margin:0;padding:0;box-sizing:border-box}body{font-family:'Cairo',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#333;min-height:100vh}.navbar{background:rgba(30,60,114,0.95);backdrop-filter:blur(10px);color:#fff;padding:1rem 5%;position:sticky;top:0;z-index:1000;box-shadow:0 4px 12px rgba(0,0,0,0.1)}.nav-container{display:flex;justify-content:space-between;align-items:center;max-width:1400px;margin:0 auto}.logo{font-size:2rem;font-weight:800;background:linear-gradient(135deg,#fff,#ffd700);-webkit-background-clip:text;-webkit-text-fill-color:transparent;cursor:pointer}.nav-menu{display:flex;gap:1rem;align-items:center}.nav-btn{background:transparent;border:2px solid rgba(255,255,255,0.2);color:#fff;padding:0.6rem 1.5rem;border-radius:50px;cursor:pointer;transition:all 0.3s ease}.nav-btn:hover{background:#fff;color:#1e3c72;transform:translateY(-2px)}.user-badge{background:rgba(255,255,255,0.1);padding:0.5rem 1.5rem;border-radius:50px;color:#fff;display:flex;align-items:center;gap:0.5rem}.dashboard{max-width:1400px;margin:2rem auto;padding:0 2rem}.welcome-card{background:linear-gradient(135deg,#1e3c72,#0f2b4f);color:#fff;padding:2rem;border-radius:15px;margin-bottom:2rem;position:relative;overflow:hidden}.welcome-card::before{content:'📚';position:absolute;font-size:8rem;opacity:0.1;left:-20px;bottom:-20px;transform:rotate(-15deg)}.welcome-title{font-size:2rem;margin-bottom:1rem}.welcome-stats{display:flex;gap:2rem;flex-wrap:wrap}.welcome-stat{display:flex;align-items:center;gap:0.5rem;background:rgba(255,255,255,0.1);padding:0.5rem 1rem;border-radius:50px}.stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-bottom:2rem}.stat-card{background:#fff;padding:1.5rem;border-radius:15px;box-shadow:0 4px 12px rgba(0,0,0,0.1);display:flex;align-items:center;gap:1rem;transition:all 0.3s ease}.stat-card:hover{transform:translateY(-5px);box-shadow:0 8px 24px rgba(0,0,0,0.15)}.stat-icon{width:50px;height:50px;background:#1e3c72;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.5rem}.stat-value{font-size:2rem;font-weight:800;color:#1e3c72;line-height:1}.modal{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:2000;justify-content:center;align-items:center}.modal-content{background:#fff;width:90%;max-width:500px;padding:2rem;border-radius:15px;position:relative;animation:modalZoom 0.3s ease}@keyframes modalZoom{from{transform:scale(0.9);opacity:0}to{transform:scale(1);opacity:1}}.modal-close{position:absolute;left:1rem;top:1rem;font-size:1.5rem;cursor:pointer;width:35px;height:35px;background:#f8f9fa;border-radius:50%;display:flex;align-items:center;justify-content:center}.modal-close:hover{background:#dc3545;color:#fff}.form-group{margin-bottom:1rem}.form-group input,.form-group select,.form-group textarea{width:100%;padding:0.8rem;border:2px solid #e9ecef;border-radius:5px;font-family:'Cairo',sans-serif}.submit-btn{width:100%;padding:1rem;background:#1e3c72;color:#fff;border:none;border-radius:5px;cursor:pointer;font-size:1.1rem;transition:all 0.3s ease}.submit-btn:hover{background:#2a5298}.user-type-selector{display:flex;gap:1rem;margin:1rem 0}.user-type-btn{flex:1;padding:1rem;border:2px solid #1e3c72;background:transparent;color:#1e3c72;border-radius:50px;cursor:pointer;font-weight:600;transition:all 0.3s ease}.user-type-btn:hover{background:rgba(30,60,114,0.1)}.user-type-btn.active{background:#1e3c72;color:#fff}.toast{position:fixed;bottom:20px;right:20px;background:#fff;padding:1rem 2rem;border-radius:50px;box-shadow:0 4px 12px rgba(0,0,0,0.1);border-right:4px solid #28a745;z-index:3000;animation:slideIn 0.3s ease}@keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}.toast.error{border-right-color:#dc3545}@media (max-width:768px){.nav-container{flex-direction:column;gap:1rem}.welcome-stats{flex-direction:column}.stats-grid{grid-template-columns:1fr}}
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo" onclick="location.reload()">تعلّم<span>.ما</span></div>
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
        // ========== أساتذة ==========
        const teachers = [
            { id: 1, name: 'أحمد الفاسي', email: 'ahmed@teacher.com', password: '123456', specialty: 'الرياضيات', bio: 'أستاذ الرياضيات - 15 سنة خبرة', avatar: '📐', rating: 4.8, followers: [], lessons: 24, students: 156 },
            { id: 2, name: 'فاطمة المراكشي', email: 'fatima@teacher.com', password: '123456', specialty: 'الفيزياء', bio: 'دكتورة في الفيزياء النووية', avatar: '⚡', rating: 4.9, followers: [], lessons: 18, students: 134 },
            { id: 3, name: 'محمد البيضاوي', email: 'mohamed@teacher.com', password: '123456', specialty: 'العربية', bio: 'أستاذ اللغة العربية', avatar: '📝', rating: 4.7, followers: [], lessons: 31, students: 98 },
            { id: 4, name: 'سعاد المغربية', email: 'souad@teacher.com', password: '123456', specialty: 'الفلسفة', bio: 'أستاذة الفلسفة', avatar: '📚', rating: 4.6, followers: [], lessons: 15, students: 67 }
        ];

        // ========== تلاميذ ==========
        const students = [
            { id: 1, name: 'يوسف الطالبي', email: 'youssef@student.com', password: '123456', level: 'bac2', following: [], savedLessons: [], points: 150, streak: 5 },
            { id: 2, name: 'سارة العلمي', email: 'sara@student.com', password: '123456', level: 'bac1', following: [], savedLessons: [], points: 80, streak: 3 },
            { id: 3, name: 'عمر الحدادي', email: 'omar@student.com', password: '123456', level: 'bac2', following: [], savedLessons: [], points: 200, streak: 10 },
            { id: 4, name: 'ليلى العلمي', email: 'laila@student.com', password: '123456', level: 'bac1', following: [], savedLessons: [], points: 120, streak: 7 }
        ];

        // ========== الدروس ==========
        const lessons = [
            { id: 101, title: 'المعادلات من الدرجة الأولى', teacherId: 1, teacherName: 'أحمد الفاسي', level: 'bac1', views: 234, downloads: 56, type: 'video', duration: '25:30' },
            { id: 102, title: 'قوانين نيوتن', teacherId: 2, teacherName: 'فاطمة المراكشي', level: 'bac2', views: 189, downloads: 43, type: 'video', duration: '32:15' },
            { id: 103, title: 'قواعد اللغة العربية', teacherId: 3, teacherName: 'محمد البيضاوي', level: 'bac1', views: 312, downloads: 78, type: 'pdf', pages: 25 },
            { id: 104, title: 'الفلسفة الإسلامية', teacherId: 4, teacherName: 'سعاد المغربية', level: 'bac2', views: 156, downloads: 34, type: 'pdf', pages: 30 }
        ];

        let currentUser = null;
        let selectedUserType = 'student';
        let viewingTeacher = null;

        // ========== دوال مشتركة ==========
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

        // ========== واجهة المستخدم الرئيسية ==========
        function renderUI() {
            const navMenu = document.getElementById('navMenu');
            
            if (currentUser) {
                navMenu.innerHTML = `
                    <span class="user-badge">👋 ${currentUser.name}</span>
                    <button class="nav-btn" onclick="logout()">خروج</button>
                `;
                
                if (viewingTeacher) {
                    renderTeacherProfile(viewingTeacher);
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

        // ========== منطقة التلاميذ ==========
        function renderStudentDashboard() {
            const student = students.find(s => s.id === currentUser.id);
            
            document.getElementById('dashboard').innerHTML = `
                <div class="welcome-card">
                    <h1 class="welcome-title">مرحباً بك ${student.name} 👋</h1>
                    <div class="welcome-stats">
                        <div class="welcome-stat"><i class="fas fa-fire"></i> ${student.streak} يوم متتالي</div>
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
                        <div><div class="stat-value">${student.following.length}</div><div>متابعة</div></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-book"></i></div>
                        <div><div class="stat-value">${lessons.length}</div><div>درس</div></div>
                    </div>
                </div>
                
                <h2 style="color: white; margin: 2rem 0 1rem;">قائمة الأساتذة</h2>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem;">
                    ${teachers.map(teacher => {
                        const isFollowing = student.following.includes(teacher.id);
                        const teacherLessons = lessons.filter(l => l.teacherId === teacher.id).length;
                        return `
                            <div style="background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                                <div style="height: 80px; background: linear-gradient(135deg,#1e3c72,#2a5298);"></div>
                                <div style="width: 80px; height: 80px; background: white; border-radius: 50%; margin: -40px auto 0; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; border: 4px solid white;">
                                    ${teacher.avatar}
                                </div>
                                <div style="padding: 1rem; text-align: center;">
                                    <h3 style="color: #1e3c72;">${teacher.name}</h3>
                                    <p style="color: #e6b800;">${teacher.specialty}</p>
                                    <p style="color: #666; font-size: 0.9rem;">${teacher.bio.substring(0, 50)}...</p>
                                    <p>⭐ ${teacher.rating} | 📚 ${teacherLessons} درس</p>
                                    <button onclick="toggleFollow(${teacher.id})" 
                                        style="width: 100%; padding: 0.7rem; border: none; border-radius: 50px; background: ${isFollowing ? '#28a745' : '#1e3c72'}; color: white; font-weight: 600; cursor: pointer; margin-top: 0.5rem;">
                                        ${isFollowing ? '✓ متابعة' : '+ متابعة'}
                                    </button>
                                    <button onclick="viewTeacherProfile(${teacher.id})" 
                                        style="width: 100%; padding: 0.7rem; border: 2px solid #1e3c72; background: transparent; color: #1e3c72; border-radius: 50px; font-weight: 600; cursor: pointer; margin-top: 0.5rem;">
                                        عرض القناة
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        }

        // ========== متابعة أستاذ ==========
        function toggleFollow(teacherId) {
            const student = students.find(s => s.id === currentUser.id);
            const teacher = teachers.find(t => t.id === teacherId);
            
            if (student.following.includes(teacherId)) {
                student.following = student.following.filter(id => id !== teacherId);
                teacher.followers = teacher.followers.filter(id => id !== student.id);
                showToast('تم إلغاء متابعة ' + teacher.name, 'info');
            } else {
                student.following.push(teacherId);
                teacher.followers.push(student.id);
                student.points += 10;
                showToast('تمت متابعة ' + teacher.name + ' +10 نقاط');
            }
            
            renderStudentDashboard();
        }

        // ========== عرض صفحة الأستاذ للتلميذ ==========
        function viewTeacherProfile(teacherId) {
            viewingTeacher = teacherId;
            const teacher = teachers.find(t => t.id === teacherId);
            const student = students.find(s => s.id === currentUser.id);
            const isFollowing = student.following.includes(teacherId);
            const teacherLessons = lessons.filter(l => l.teacherId === teacherId);
            
            document.getElementById('dashboard').innerHTML = `
                <div style="background: white; border-radius: 20px; overflow: hidden; margin-bottom: 2rem;">
                    <div style="height: 150px; background: linear-gradient(135deg,#1e3c72,#2a5298); position: relative;">
                        <div style="width: 100px; height: 100px; background: white; border-radius: 50%; position: absolute; bottom: -50px; right: 30px; display: flex; align-items: center; justify-content: center; font-size: 3rem; border: 4px solid #ffd700;">
                            ${teacher.avatar}
                        </div>
                    </div>
                    <div style="padding: 4rem 2rem 2rem;">
                        <h1 style="color: #1e3c72;">${teacher.name}</h1>
                        <p style="color: #e6b800; font-size: 1.2rem;">${teacher.specialty}</p>
                        <p style="color: #666; margin: 1rem 0;">${teacher.bio}</p>
                        
                        <div style="display: flex; gap: 2rem; margin: 1rem 0;">
                            <div><strong style="font-size: 1.5rem; color: #1e3c72;">${teacher.followers.length}</strong><br>متابع</div>
                            <div><strong style="font-size: 1.5rem; color: #1e3c72;">${teacherLessons.length}</strong><br>درس</div>
                            <div><strong style="font-size: 1.5rem; color: #1e3c72;">${teacher.rating}</strong><br>تقييم</div>
                        </div>
                        
                        <div style="display: flex; gap: 1rem; margin: 2rem 0;">
                            <button onclick="toggleFollow(${teacher.id})" 
                                style="flex: 1; padding: 1rem; border: none; border-radius: 50px; background: ${isFollowing ? '#28a745' : '#1e3c72'}; color: white; font-weight: 600; cursor: pointer;">
                                ${isFollowing ? '✓ متابعة' : '+ متابعة'}
                            </button>
                            <button onclick="viewingTeacher = null; renderStudentDashboard()" 
                                style="flex: 1; padding: 1rem; border: 2px solid #1e3c72; background: transparent; color: #1e3c72; border-radius: 50px; font-weight: 600; cursor: pointer;">
                                رجوع
                            </button>
                        </div>
                        
                        <h2 style="color: #1e3c72; margin: 2rem 0 1rem;">الدروس المتاحة</h2>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
                            ${teacherLessons.map(lesson => `
                                <div style="background: #f8f9fa; border-radius: 10px; padding: 1rem;">
                                    <h3 style="color: #1e3c72;">${lesson.title}</h3>
                                    <p style="color: #666;">${lesson.type === 'video' ? '🎥 ' + lesson.duration : '📄 ' + lesson.pages + ' صفحة'}</p>
                                    <p style="color: #666;">👁️ ${lesson.views} مشاهدة</p>
                                    <button onclick="showToast('سيتم فتح الدرس')" 
                                        style="width: 100%; padding: 0.5rem; background: #1e3c72; color: white; border: none; border-radius: 5px; cursor: pointer; margin-top: 0.5rem;">
                                        مشاهدة
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // ========== منطقة الأساتذة ==========
        function renderTeacherDashboard() {
            const teacher = teachers.find(t => t.id === currentUser.id);
            const teacherLessons = lessons.filter(l => l.teacherId === teacher.id);
            const teacherFollowers = students.filter(s => teacher.followers.includes(s.id));
            
            document.getElementById('dashboard').innerHTML = `
                <div class="welcome-card">
                    <h1 class="welcome-title">مرحباً بك أ. ${teacher.name} 👨‍🏫</h1>
                    <p>${teacher.bio}</p>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-users"></i></div>
                        <div><div class="stat-value">${teacher.followers.length}</div><div>متابع</div></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-book"></i></div>
                        <div><div class="stat-value">${teacherLessons.length}</div><div>درس</div></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-star"></i></div>
                        <div><div class="stat-value">${teacher.rating}</div><div>تقييم</div></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-graduation-cap"></i></div>
                        <div><div class="stat-value">${teacher.students}</div><div>طالب</div></div>
                    </div>
                </div>
                
                <div style="background: white; padding: 2rem; border-radius: 15px; margin-bottom: 2rem;">
                    <h2 style="color: #1e3c72; margin-bottom: 1rem;">إجراءات سريعة</h2>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <button class="nav-btn" style="background: #1e3c72; color: white;" onclick="showAddLessonForm()">
                            <i class="fas fa-plus"></i> إضافة درس جديد
                        </button>
                        <button class="nav-btn" style="background: #ffd700; color: #1e3c72;" onclick="showTeacherProfile()">
                            <i class="fas fa-eye"></i> عرض صفحتي
                        </button>
                    </div>
                </div>
                
                <div style="background: white; padding: 2rem; border-radius: 15px; margin-bottom: 2rem;">
                    <h2 style="color: #1e3c72; margin-bottom: 1rem;">دروسي (${teacherLessons.length})</h2>
                    
                    ${teacherLessons.length === 0 ? `
                        <p style="color: #666; text-align: center;">لا توجد دروس بعد</p>
                    ` : `
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
                            ${teacherLessons.map(lesson => `
                                <div style="background: #f8f9fa; padding: 1rem; border-radius: 10px;">
                                    <h3 style="color: #1e3c72;">${lesson.title}</h3>
                                    <p style="color: #666;">${lesson.type === 'video' ? '🎥 فيديو' : '📄 PDF'}</p>
                                    <p style="color: #666;">👁️ ${lesson.views} مشاهدة</p>
                                    <p style="color: #666;">📥 ${lesson.downloads} تحميل</p>
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>
                
                <div style="background: white; padding: 2rem; border-radius: 15px;">
                    <h2 style="color: #1e3c72; margin-bottom: 1rem;">المتابعون (${teacherFollowers.length})</h2>
                    
                    ${teacherFollowers.length === 0 ? `
                        <p style="color: #666; text-align: center;">لا يوجد متابعين بعد</p>
                    ` : `
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
                            ${teacherFollowers.map(student => `
                                <div style="background: #f8f9fa; padding: 1rem; border-radius: 10px; text-align: center;">
                                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">👨‍🎓</div>
                                    <h3 style="color: #1e3c72;">${student.name}</h3>
                                    <p style="color: #666;">${getLevelName(student.level)}</p>
                                    <p style="color: #666;">⭐ ${student.points} نقطة</p>
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>
            `;
        }

        // ========== عرض صفحة الأستاذ لنفسه ==========
        function showTeacherProfile() {
            const teacher = teachers.find(t => t.id === currentUser.id);
            const teacherLessons = lessons.filter(l => l.teacherId === teacher.id);
            
            document.getElementById('dashboard').innerHTML = `
                <div style="background: white; border-radius: 20px; overflow: hidden;">
                    <div style="height: 150px; background: linear-gradient(135deg,#1e3c72,#2a5298); position: relative;">
                        <div style="width: 100px; height: 100px; background: white; border-radius: 50%; position: absolute; bottom: -50px; right: 30px; display: flex; align-items: center; justify-content: center; font-size: 3rem; border: 4px solid #ffd700;">
                            ${teacher.avatar}
                        </div>
                    </div>
                    <div style="padding: 4rem 2rem 2rem;">
                        <h1 style="color: #1e3c72;">${teacher.name}</h1>
                        <p style="color: #e6b800; font-size: 1.2rem;">${teacher.specialty}</p>
                        <p style="color: #666; margin: 1rem 0;">${teacher.bio}</p>
                        
                        <div style="display: flex; gap: 2rem; margin: 1rem 0;">
                            <div><strong style="font-size: 1.5rem; color: #1e3c72;">${teacher.followers.length}</strong><br>متابع</div>
                            <div><strong style="font-size: 1.5rem; color: #1e3c72;">${teacherLessons.length}</strong><br>درس</div>
                            <div><strong style="font-size: 1.5rem; color: #1e3c72;">${teacher.rating}</strong><br>تقييم</div>
                        </div>
                        
                        <button onclick="renderTeacherDashboard()" 
                            style="padding: 1rem 2rem; background: #1e3c72; color: white; border: none; border-radius: 50px; font-weight: 600; cursor: pointer; margin-top: 1rem;">
                            رجوع للوحة التحكم
                        </button>
                    </div>
                </div>
            `;
        }

        // ========== إضافة درس جديد ==========
        function showAddLessonForm() {
            showModal(`
                <h2 style="color: #1e3c72;">إضافة درس جديد</h2>
                <div class="form-group">
                    <input type="text" id="lessonTitle" placeholder="عنوان الدرس">
                </div>
                <div class="form-group">
                    <textarea id="lessonDesc" rows="3" placeholder="وصف الدرس"></textarea>
                </div>
                <div class="form-group">
                    <select id="lessonType">
                        <option value="video">فيديو</option>
                        <option value="pdf">PDF</option>
                    </select>
                </div>
                <div class="form-group">
                    <select id="lessonLevel">
                        <option value="bac1">الأولى باكالوريا</option>
                        <option value="bac2">الثانية باكالوريا</option>
                    </select>
                </div>
                <button class="submit-btn" onclick="addNewLesson()">نشر الدرس</button>
            `);
        }

        function addNewLesson() {
            const title = document.getElementById('lessonTitle').value;
            const desc = document.getElementById('lessonDesc').value;
            const type = document.getElementById('lessonType').value;
            const level = document.getElementById('lessonLevel').value;
            
            if (!title || !desc) {
                showToast('الرجاء ملء جميع الحقول', 'error');
                return;
            }
            
            const newLesson = {
                id: lessons.length + 101,
                title: title,
                description: desc,
                teacherId: currentUser.id,
                teacherName: teachers.find(t => t.id === currentUser.id).name,
                level: level,
                type: type,
                views: 0,
                downloads: 0,
                ...(type === 'video' ? { duration: '00:00' } : { pages: 1 })
            };
            
            lessons.push(newLesson);
            closeModal();
            renderTeacherDashboard();
            showToast('تم إضافة الدرس بنجاح');
        }

        // ========== المصادقة ==========
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
                    followers: [],
                    lessons: 0,
                    students: 0
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
            viewingTeacher = null;
            renderUI();
            showToast('تم تسجيل الخروج');
        }

        renderUI();

        window.onclick = function(event) {
            const modal = document.getElementById('modal');
            if (event.target === modal) closeModal();
        };
    </script>
</body>
</html>