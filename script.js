// بيانات تجريبية للبدء
let lessons = JSON.parse(localStorage.getItem('lessons')) || [
    {
        id: 1,
        title: 'المعادلات من الدرجة الأولى',
        description: 'شرح مبسط للمعادلات مع أمثلة تطبيقية',
        level: 'troisieme',
        subject: 'math',
        teacher: 'أحمد',
        video: 'https://youtube.com/watch?v=example1',
        file: null
    },
    {
        id: 2,
        title: 'درس في الفيزياء: الحركة',
        description: 'مفهوم الحركة والسرعة',
        level: 'bac',
        subject: 'physique',
        teacher: 'فاطمة',
        video: 'https://youtube.com/watch?v=example2',
        file: null
    }
];

let currentTeacher = JSON.parse(localStorage.getItem('currentTeacher')) || null;

// حفظ الدروس في التخزين المحلي
function saveLessons() {
    localStorage.setItem('lessons', JSON.stringify(lessons));
}

// عرض الدروس في الصفحة الرئيسية
function displayLessons(filteredLessons = lessons) {
    const container = document.getElementById('lessonsContainer');
    if (!container) return;

    if (filteredLessons.length === 0) {
        container.innerHTML = '<p class="no-lessons">لا توجد دروس بعد</p>';
        return;
    }

    container.innerHTML = filteredLessons.map(lesson => `
        <div class="lesson-card">
            <h3>${lesson.title}</h3>
            <p>${lesson.description}</p>
            <div class="meta">
                <span>المستوى: ${getLevelName(lesson.level)}</span><br>
                <span>المادة: ${getSubjectName(lesson.subject)}</span><br>
                <span>الأستاذ: ${lesson.teacher}</span>
            </div>
            <div class="actions">
                ${lesson.video ? `<button class="view-btn" onclick="watchVideo('${lesson.video}')">مشاهدة الفيديو</button>` : ''}
                ${lesson.file ? `<button class="view-btn" onclick="downloadFile('${lesson.file}')">تحميل PDF</button>` : ''}
            </div>
        </div>
    `).join('');
}

// ترجمة المستويات
function getLevelName(level) {
    const levels = {
        'premiere': 'الأولى إعدادي',
        'deuxieme': 'الثانية إعدادي',
        'troisieme': 'الثالثة إعدادي',
        'tronc': 'جذع مشترك',
        'bac': 'باكالوريا'
    };
    return levels[level] || level;
}

// ترجمة المواد
function getSubjectName(subject) {
    const subjects = {
        'math': 'الرياضيات',
        'physique': 'الفيزياء',
        'arabe': 'العربية',
        'francais': 'الفرنسية'
    };
    return subjects[subject] || subject;
}

// فلترة الدروس
function filterLessons() {
    const level = document.getElementById('levelFilter')?.value;
    const subject = document.getElementById('subjectFilter')?.value;

    let filtered = lessons;

    if (level) {
        filtered = filtered.filter(l => l.level === level);
    }

    if (subject) {
        filtered = filtered.filter(l => l.subject === subject);
    }

    displayLessons(filtered);
}

// مشاهدة فيديو
function watchVideo(url) {
    window.open(url, '_blank');
}

// تحميل ملف
function downloadFile(file) {
    // في النسخة الكاملة، هذا سيكون رابط التحميل
    alert('سيتم تحميل الملف قريباً');
}

// إظهار نافذة تسجيل الدخول
function showLoginPrompt() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'block';
    } else {
        window.location.href = 'dashboard.html';
    }
}

// نظام تسجيل الدخول
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('teacherName').value;
        const password = document.getElementById('teacherPassword').value;

        // كلمة السر بسيطة للتجربة
        if (password === '1234') {
            currentTeacher = {
                name: name,
                id: Date.now()
            };
            localStorage.setItem('currentTeacher', JSON.stringify(currentTeacher));
            window.location.href = 'dashboard.html';
        } else {
            alert('كلمة السر خطأ');
        }
    });
}

// إضافة درس جديد
if (document.getElementById('lessonForm')) {
    document.getElementById('lessonForm').addEventListener('submit', function(e) {
        e.preventDefault();

        if (!currentTeacher) {
            alert('الرجاء تسجيل الدخول أولاً');
            window.location.href = 'index.html';
            return;
        }

        const newLesson = {
            id: Date.now(),
            title: document.getElementById('lessonTitle').value,
            description: document.getElementById('lessonDesc').value,
            level: document.getElementById('lessonLevel').value,
            subject: document.getElementById('lessonSubject').value,
            video: document.getElementById('lessonVideo').value,
            file: document.getElementById('lessonFile').files[0]?.name || null,
            teacher: currentTeacher.name
        };

        lessons.push(newLesson);
        saveLessons();
        displayTeacherLessons();
        
        // تصفية النموذج
        this.reset();
        alert('تم نشر الدرس بنجاح');
    });
}

// عرض دروس الأستاذ الحالي في لوحة التحكم
function displayTeacherLessons() {
    const container = document.getElementById('teacherLessonsList');
    if (!container || !currentTeacher) return;

    const teacherLessons = lessons.filter(l => l.teacher === currentTeacher.name);

    if (teacherLessons.length === 0) {
        container.innerHTML = '<p>لم تقم برفع أي درس بعد</p>';
        return;
    }

    container.innerHTML = teacherLessons.map(lesson => `
        <div class="lesson-card">
            <h3>${lesson.title}</h3>
            <p>${lesson.description}</p>
            <div class="meta">
                <span>المستوى: ${getLevelName(lesson.level)}</span><br>
                <span>المادة: ${getSubjectName(lesson.subject)}</span>
            </div>
            <div class="actions">
                <button class="delete-btn" onclick="deleteLesson(${lesson.id})">حذف</button>
            </div>
        </div>
    `).join('');
}

// حذف درس
function deleteLesson(id) {
    if (confirm('هل أنت متأكد من حذف هذا الدرس؟')) {
        lessons = lessons.filter(l => l.id !== id);
        saveLessons();
        displayTeacherLessons();
        displayLessons(); // تحديث الصفحة الرئيسية إذا كانت مفتوحة
    }
}

// تسجيل الخروج
if (document.getElementById('logoutBtn')) {
    document.getElementById('logoutBtn').addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('currentTeacher');
        window.location.href = 'index.html';
    });
}

// إغلاق النافذة المنبثقة
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('close') || e.target.classList.contains('modal')) {
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
});

// تشغيل الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    displayLessons();
    
    // التحقق من تسجيل الدخول في لوحة التحكم
    if (window.location.pathname.includes('dashboard.html')) {
        if (!currentTeacher) {
            window.location.href = 'index.html';
        } else {
            displayTeacherLessons();
        }
    }
});